import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { IModuleForm } from '@/types/formTypes';
import { Button, Dialog, Input } from '@/components';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { generateId } from '@/utils/generateId';
import { validations } from '@/utils/validations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddModule: React.FC<Props> = ({ isOpen, onClose }) => {
  const { addModule } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const methods = useForm<IModuleForm>();
  const { handleSubmit, reset } = methods;

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<IModuleForm> = data => {
    dispatch(
      addModule({
        title: data.moduleTitle,
        id: generateId(),
        lessons: {},
        lessonsIds: [],
      })
    );
    onClose();
    reset();
  };
  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <div className='flex flex-col gap-3'>
        <h1 className='text-center font-medium'>Добавить новый модуль</h1>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            <Input
              name='moduleTitle'
              autoFocus={true}
              placeholder='Введите название модуля'
              className='h-10'
              rules={validations.required}
            />
            <div className='flex justify-center gap-4 h-11'>
              <Button
                title='Добавить'
                className='text-white bg-teal-600 flex-1'
              />
              <Button
                title='Отменить'
                className='text-gray-500 bg-gray-500/15 flex-1'
                onClick={handleClose}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </Dialog>
  );
};

export default AddModule;
