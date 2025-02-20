import { ReactNode, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { MenuIcon } from '@/assets';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { uiSlice } from '@/store/reducers/uiReducer';

interface IProps {
  children: ReactNode;
  closeDep?: boolean | boolean[];
  id: string;
}

const Menu: React.FC<IProps> = ({ children, closeDep, id }) => {
  const isOpen = useAppSelector(state => state.uiReducer.menu === id);
  const { toggleMenu } = uiSlice.actions;
  const dispatch = useAppDispatch();

  const nodeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleClick = (e: React.MouseEvent) => {
    dispatch(toggleMenu(id));
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({ top: rect.bottom, left: rect.left });
  };

  useEffect(() => {
    if (!isOpen) return;
    dispatch(toggleMenu(id));
  }, [closeDep]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (
        !nodeRef.current?.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        dispatch(toggleMenu(id));
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <div
      className='relative'
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <button
        className='button flex items-center'
        ref={buttonRef}
        onClick={handleClick}
      >
        <MenuIcon className='size-6 fill-gray-400 hover:fill-teal-600' />
      </button>
      <CSSTransition
        in={isOpen}
        classNames={'menu'}
        timeout={200}
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div
          className='z-50 fixed text-gray-600 bg-white shadow-xl p-2 rounded-xl'
          style={{ top: menuPosition.top, left: menuPosition.left }}
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Menu;
