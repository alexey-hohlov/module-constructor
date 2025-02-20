import { ReactNode, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: (e: React.MouseEvent) => void;
}

const Dialog: React.FC<Props> = ({ children, isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  const [content, setContent] = useState<boolean>(false);

  return (
    <CSSTransition
      in={isOpen}
      timeout={200}
      nodeRef={overlayRef}
      unmountOnExit
      onEnter={() => setContent(true)}
      onExit={() => setContent(false)}
    >
      <div
        className='fixed top-0 left-0 w-screen h-screen flex justify-center items-end select-none z-10'
        onMouseDown={onClose}
        ref={overlayRef}
      >
        <CSSTransition
          in={content}
          classNames={'dialog'}
          timeout={200}
          nodeRef={contentRef}
          unmountOnExit
        >
          <div
            className='bg-white w-96 rounded-xl p-4 mb-10 drop-shadow-2xl'
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

export default Dialog;
