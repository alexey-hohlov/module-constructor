const MultipleTask: React.FC = () => {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='py-1 outline-0 text-2xl font-medium'
        placeholder='Текст Задания'
      />
      <label className='flex gap-2'>
        <input
          className=' accent-teal-600 cursor-pointer scale-150'
          type='checkbox'
          name='variant'
        />
        Вариант 1
      </label>
      <label className='flex gap-2'>
        <input
          className=' accent-teal-600 cursor-pointer scale-150'
          type='checkbox'
          name='variant'
        />
        Вариант 2
      </label>{' '}
      <label className='flex gap-2'>
        <input
          className=' accent-teal-600 cursor-pointer scale-150'
          type='checkbox'
          name='variant'
        />
        Вариант 3
      </label>
    </div>
  );
};

export default MultipleTask;
