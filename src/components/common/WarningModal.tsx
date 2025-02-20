import { Button, Modal } from '@/components';

interface Props {
  isOpen: boolean;
  onClose: (e: React.MouseEvent) => void;
  handleDelete: () => void;
  itemName: string;
}

const WarningModal: React.FC<Props> = ({
  onClose,
  isOpen,
  itemName,
  handleDelete,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl text-center text-teal-600 font-bold'>
          Внимание!
        </h3>
        <div className='flex flex-col gap-2 bg-gray-100 rounded-xl p-4'>
          <div className='flex items-center text-center'>
            <div className='overflow-hidden whitespace-nowrap text-ellipsis'>
              Вы уверены что хотите удалить{' '}
              <span className='text-teal-600 font-bold'>{itemName}</span>
            </div>
            ?
          </div>
          <div className='text-center'>
            Это действие{' '}
            <span className='text-red-400 font-bold'>невозможно</span> будет
            отменить
          </div>
        </div>
        <div className='flex justify-center gap-4 h-11'>
          <Button
            className='bg-red-400 flex-1 text-white'
            title='Удалить'
            onClick={handleDelete}
          />
          <Button
            className='bg-gray-100 text-gray-500 flex-1'
            title='Отменить'
            onClick={onClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export default WarningModal;
