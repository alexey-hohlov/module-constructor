import { ReactNode, useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: (e: React.MouseEvent) => void;
}

const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const [content, setContent] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <CSSTransition
      in={isOpen}
      classNames={'modal-overlay'}
      timeout={200}
      nodeRef={overlayRef}
      unmountOnExit
      onEnter={() => setContent(true)}
      onExit={() => setContent(false)}
    >
      <div
        ref={overlayRef}
        onMouseDown={onClose}
        className='fixed top-0 left-0 w-screen h-screen bg-gray-700/30 backdrop-blur flex justify-center items-center select-none cursor-pointer z-20'
      >
        <CSSTransition
          in={content}
          classNames={'modal-content'}
          timeout={200}
          nodeRef={contentRef}
          unmountOnExit
        >
          <div
            className='cursor-default bg-white w-96 shadow-xl rounded-xl p-4'
            ref={contentRef}
            onMouseDown={e => e.stopPropagation()}
          >
            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
};

export default Modal;
