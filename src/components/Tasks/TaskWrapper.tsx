import { DeleteIcon } from '@/assets';
import { Button, MultipleTask, SingleTask, TextTask } from '@/components';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { ITask } from '@/types/moduleTypes';

interface Props {
  task: ITask;
}

const TaskWrapper: React.FC<Props> = ({ task }) => {
  const { deleteTask } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleTask = () => {
    switch (task.type) {
      case 'SINGLE':
        return <SingleTask />;
      case 'MULTIPLE':
        return <MultipleTask />;
      case 'TEXT':
        return <TextTask />;
      default:
        break;
    }
  };

  return (
    <li className='w-full p-4 flex gap-2 items-center justify-between bg-gray-100 rounded-lg'>
      <div className='w-full'>{handleTask()}</div>
      <Button
        className='bg-red-400/15 top-2 right-2 h-10'
        onClick={handleDelete}
      >
        <DeleteIcon className='fill-red-400' />
      </Button>
    </li>
  );
};

export default TaskWrapper;
