const NotFoundPage: React.FC = () => {
  return (
    <section className='h-full flex justify-center items-center'>
      <div className='text-teal-600/50 font-bold flex flex-col gap-2 items-center'>
        <span className='text-7xl'>404</span>
        <span className='text-2xl'>PAGE NOT FOUND</span>
      </div>
    </section>
  );
};

export default NotFoundPage;
