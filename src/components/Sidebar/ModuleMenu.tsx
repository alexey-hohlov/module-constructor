import { DeleteIcon, EditIcon } from '@/assets';
import { Button } from '@/components';

interface Props {
  deleteModule: (e: React.MouseEvent) => void;
  editModule: () => void;
}

const ModuleMenu: React.FC<Props> = ({ deleteModule, editModule }) => {
  return (
    <ul>
      <li>
        <Button
          className='flex items-center justify-between w-full gap-1 hover:bg-teal-600/15'
          onClick={deleteModule}
        >
          Удалить
          <DeleteIcon className='fill-red-400' />
        </Button>
      </li>
      <li>
        <Button
          className='flex items-center justify-between w-full gap-1 hover:bg-teal-600/15'
          onClick={editModule}
        >
          Редактировать
          <EditIcon className='fill-teal-600' />
        </Button>
      </li>
    </ul>
  );
};

export default ModuleMenu;
