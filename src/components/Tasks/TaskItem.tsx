import { ReactNode } from 'react';
import { Button } from '@/components';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { generateId } from '@/utils/generateId';
import { TaskType } from '@/types/moduleTypes';

interface Props {
  task: {
    title: string;
    value: string;
    icon: ReactNode;
    type: string;
  };
  onClose: () => void;
}

const TaskItem: React.FC<Props> = ({ task, onClose }) => {
  const { addTask } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(
      addTask({
        title: '',
        type: task.type as TaskType,
        id: generateId(),
      })
    );
    onClose();
  };

  return (
    <Button onClick={handleAdd}>
      <div className='flex flex-col gap-2 items-center justify-center size-[150px] bg-gray-100 rounded-lg p-4 transition hover:shadow-md'>
        {task.icon}
        <span className='font-medium'>{task.title}</span>
      </div>
    </Button>
  );
};

export default TaskItem;
