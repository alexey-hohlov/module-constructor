import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Button, Dialog, Input } from '@/components';
import { IModuleForm } from '@/types/formTypes';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { validations } from '@/utils/validations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  title: string;
}

const EditModule: React.FC<Props> = ({ isOpen, onClose, id, title }) => {
  const { editModule } = moduleSlice.actions;
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
      editModule({
        title: data.moduleTitle,
        moduleId: id,
      })
    );
    onClose();
    reset();
  };
  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <div className='flex flex-col gap-3'>
        <h1 className='text-center font-medium'>Редактировать модуль</h1>
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
              defaultValue={title}
            />
            <div className='flex justify-center gap-4 h-11'>
              <Button
                title='Сохранить'
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

export default EditModule;
