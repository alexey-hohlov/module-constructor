import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { Dialog, Input, RadioGroup, Button } from '@/components';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { ILessonForm } from '@/types/formTypes';
import { LessonType } from '@/types/moduleTypes';
import { validations } from '@/utils/validations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: string;
}

const LessonSettings: React.FC<Props> = ({ isOpen, onClose, title, type }) => {
  const { editLesson } = moduleSlice.actions;
  const dispatch = useAppDispatch();
  const methods = useForm<ILessonForm>();
  const { handleSubmit, reset } = methods;

  const options = [
    { label: 'Лекция', value: LessonType.lecture },
    { label: 'Практическое занятие', value: LessonType.practical },
  ];

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    reset();
  };

  const onSubmit: SubmitHandler<ILessonForm> = data => {
    dispatch(
      editLesson({
        title: data.lessonTitle,
        type: data.lessonType,
      })
    );
    onClose();
    reset();
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <div className='flex flex-col gap-3'>
        <h1 className='text-center font-medium'>Настройки занятия</h1>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-4'
          >
            <Input
              name='lessonTitle'
              autoFocus={true}
              placeholder='Введите название занятия'
              className='h-10'
              defaultValue={title}
              rules={validations.required}
            />
            <RadioGroup
              name='lessonType'
              options={options}
              label='Тип занятия'
              defaultValue={type}
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

export default LessonSettings;
