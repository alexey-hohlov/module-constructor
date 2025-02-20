const TextTask: React.FC = () => {
  return (
    <div className='flex flex-col gap-2'>
      <input
        className='px-2 py-1 outline-0 text-2xl font-medium'
        placeholder='Текст Задания'
      />
      <input className='px-2 py-1 outline-0' placeholder="Ответ"/>
    </div>
  );
};

export default TextTask;
