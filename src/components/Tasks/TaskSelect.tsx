import { ButtonIcon, CheckListIcon, TextIcon } from '@/assets';
import { TaskItem } from '@/components';
import { TaskType } from '@/types/moduleTypes';

interface Props {
  onClose: () => void;
}

const TaskSelect: React.FC<Props> = ({ onClose }) => {
  const className = 'fill-teal-600 size-11';
  const options = [
    {
      title: 'Один выбор',
      value: 'single',
      type: TaskType.single,
      icon: <ButtonIcon className={className} />,
    },
    {
      title: 'Множественный выбор',
      value: 'multiple',
      type: TaskType.multiple,
      icon: <CheckListIcon className={className} />,
    },
    {
      title: 'Текст',
      value: 'text',
      type: TaskType.text,
      icon: <TextIcon className={className} />,
    },
  ];

  return (
    <>
      <h3 className='text-center font-bold'>Добавить задание</h3>
      <div className='h-[calc(100%-40px)] overflow-y-auto'>
        <ul className='py-4 w-full flex gap-2 flex-wrap'>
          {options.map(item => (
            <li key={item.value}>
              <TaskItem task={item} onClose={onClose} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TaskSelect;
