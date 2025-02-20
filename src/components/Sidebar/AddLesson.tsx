import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { ILessonForm } from '@/types/formTypes';
import { Button, Dialog, Input, RadioGroup } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { generateId } from '@/utils/generateId';
import { validations } from '@/utils/validations';
import { LessonType } from '@/types/moduleTypes';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const AddLesson: React.FC<Props> = ({ isOpen, onClose }) => {
  const { selectedModule } = useAppSelector(state => state.moduleReducer);
  const { addLesson } = moduleSlice.actions;
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
    if (selectedModule === null) return;
    dispatch(
      addLesson({
        moduleId: selectedModule,
        lesson: {
          title: data.lessonTitle,
          elements: [],
          type: data.lessonType,
          id: generateId(),
          tasks: [],
        },
      })
    );
    onClose();
    reset();
  };
  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
      <div className='flex flex-col gap-3'>
        <h1 className='text-center font-medium'>Добавить новое занятие</h1>
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
              rules={validations.required}
            />
            <RadioGroup
              name='lessonType'
              options={options}
              label='Тип занятия'
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

export default AddLesson;
