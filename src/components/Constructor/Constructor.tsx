import { useState } from 'react';
import {
  ElementWrapper,
  Header,
  ElementSelect,
  ConstructorDialog,
  TaskSelect,
  TaskWrapper,
} from '@/components';
import { ILesson } from '@/types/moduleTypes';

interface Props {
  lesson: ILesson;
}

const Constructor: React.FC<Props> = ({ lesson }) => {
  const [elementDialog, setElementDialog] = useState<boolean>(false);
  const [taskDialog, setTaskDialog] = useState<boolean>(false);

  const toggleElement = () => {
    setTaskDialog(false);
    setElementDialog(prev => !prev);
  };

  const toggleTask = () => {
    setElementDialog(false);
    setTaskDialog(prev => !prev);
  };

  return (
    <div className='flex flex-col gap-4 h-full w-full relative overflow-hidden'>
      <Header
        title={lesson.title}
        type={lesson.type}
        addElement={toggleElement}
        addTask={toggleTask}
      />
      <div className='flex flex-col gap-4 bg-white rounded-lg h-full p-4 overflow-y-auto'>
        {lesson.elements.length > 0 && (
          <ul className='flex flex-col gap-3'>
            <h3 className='font-bold'>Элементы:</h3>
            {lesson.elements.map(item => (
              <ElementWrapper key={item.id} element={item} />
            ))}
          </ul>
        )}
        {lesson.tasks.length > 0 && (
          <ul className='flex flex-col gap-3'>
            <h3 className='font-bold'>Задания:</h3>
            {lesson.tasks?.map(item => (
              <TaskWrapper key={item.id} task={item} />
            ))}
          </ul>
        )}
      </div>
      <ConstructorDialog isOpen={elementDialog} onClose={toggleElement}>
        <ElementSelect onClose={toggleElement} />
      </ConstructorDialog>
      <ConstructorDialog isOpen={taskDialog} onClose={toggleTask}>
        <TaskSelect onClose={toggleTask} />
      </ConstructorDialog>
    </div>
  );
};

export default Constructor;
