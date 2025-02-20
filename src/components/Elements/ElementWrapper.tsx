import { IElement } from '@/types/moduleTypes';
import { DeleteIcon } from '@/assets';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { useAppDispatch } from '@/hooks/reduxHooks';
import {
  TitleElement,
  Button,
  TextElement,
  CodeElement,
  ImageElement,
} from '@/components';

interface Props {
  element: IElement;
}

const ElementWrapper: React.FC<Props> = ({ element }) => {
  const { deleteElement } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteElement(element.id));
  };

  const handleElement = () => {
    switch (element.type) {
      case 'title':
        return <TitleElement />;
      case 'text':
        return <TextElement />;
      case 'code':
        return <CodeElement />;
      case 'image':
        return <ImageElement />;
      default:
        break;
    }
  };

  return (
    <li className='w-full p-2 flex gap-2 items-center'>
      {handleElement()}
      <Button className='bg-red-400/15 top-2 right-2 h-10' onClick={handleDelete}>
        <DeleteIcon className='fill-red-400' />
      </Button>
    </li>
  );
};

export default ElementWrapper;
