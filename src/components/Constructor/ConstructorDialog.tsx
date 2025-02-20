import { ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Button } from '@/components';
import { CloseIcon } from '@/assets';

interface Props {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const ConstructorDialog: React.FC<Props> = ({ isOpen, children, onClose }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (!nodeRef.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <CSSTransition
      in={isOpen}
      classNames={'dialog'}
      timeout={200}
      nodeRef={nodeRef}
      unmountOnExit
    >
      <div
        className='bg-white shadow-2xl px-6 py-4 rounded-lg w-[96%] h-[75%] absolute bottom-2 left-1/2 transform -translate-x-1/2 select-none'
        ref={nodeRef}
        onMouseDown={e => e.stopPropagation()}
      >
        <div className='relative h-full w-full'>
          {children}
          <Button
            className='absolute bottom-2 z-10 right-0 bg-teal-600 !rounded-full w-[50px] h-[50px] flex items-center justify-center'
            onClick={onClose}
          >
            <CloseIcon className='fill-white size-9' />
          </Button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ConstructorDialog;
