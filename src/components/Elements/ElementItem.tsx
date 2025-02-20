import { ReactNode } from 'react';

import { Button } from '@/components';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { generateId } from '@/utils/generateId';

interface Props {
  element: {
    title: string;
    type: string;
    icon: ReactNode;
    disabled: boolean;
  };
  onClose: () => void;
}

const ElementItem: React.FC<Props> = ({ element, onClose }) => {
  const { addElement } = moduleSlice.actions;
  const dispatch = useAppDispatch();
  const handleAdd = () => {
    dispatch(
      addElement({
        title: element.title,
        type: element.type,
        id: generateId(),
      })
    );
    onClose();
  };

  return (
    <Button onClick={handleAdd} disabled={element.disabled}>
      <div className='flex flex-col gap-2 items-center justify-center size-[110px] bg-gray-100 rounded-lg p-4 transition hover:shadow-md'>
        {element.icon}
        <span className='font-medium'>{element.title}</span>
      </div>
    </Button>
  );
};

export default ElementItem;
