import { LessonIcon } from '@/assets';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { ILesson } from '@/types/moduleTypes';

interface Props {
  lesson: ILesson;
}

const LessonItem: React.FC<Props> = ({ lesson }) => {
  const { selectedLesson } = useAppSelector(state => state.moduleReducer);
  const { selectLesson } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const handleSelect = () => {
    dispatch(selectLesson(lesson.id));
  };

  return (
    <li
      className={`w-[95%] flex gap-2 items-center shadow select-none cursor-pointer rounded-lg h-10 p-2 font-medium ${
        selectedLesson === lesson.id ? 'bg-gray-100' : 'bg-white text-gray-500'
      }`}
      onClick={handleSelect}
    >
      <LessonIcon className='fill-teal-600/60 size-5 flex-none'/>
      <span className='truncate'>{lesson.title}</span>
    </li>
  );
};

export default LessonItem;
