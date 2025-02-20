import { Constructor, Sidebar } from '@/components';
import { useAppSelector } from '@/hooks/reduxHooks';

const ConstructorPage: React.FC = () => {
  const { modules, selectedModule, selectedLesson } = useAppSelector(
    state => state.moduleReducer
  );

  const lesson = selectedModule !== null && selectedLesson !== null;

  return (
    <section className='flex gap-[20px] h-full w-full'>
      <Sidebar />
      {lesson ? (
        <Constructor lesson={modules[selectedModule].lessons[selectedLesson]} />
      ) : (
        <div className='bg-white rounded-lg flex justify-center items-center size-full'>
          <span className='text-3xl font-bold text-teal-600/50'>
            Выберите модуль и урок
          </span>
        </div>
      )}
    </section>
  );
};

export default ConstructorPage;
