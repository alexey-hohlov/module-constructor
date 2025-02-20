import { ImageIcon } from '@/assets';

const ImageElement: React.FC = () => {
  return (
    <label className='w-full p-2 border-2 border-gray-300 min-h-[200px] rounded-lg cursor-pointer flex flex-col gap-3 items-center justify-center text-center'>
      <ImageIcon className='size-20 fill-gray-300' />
      <span className='font-medium text-lg'>
        Нажмите для загрузки изображения или перетащите сюда файл
      </span>
      <div className='text-gray-500'>
        Файл обрабатывается{' '}
        <span className='bg-gray-100 rounded-lg p-1'>до 20 Мб</span>{' '}
        <span className='bg-gray-100 rounded-lg p-1'>.jpg</span>{' '}
        <span className='bg-gray-100 rounded-lg p-1'>.png</span>{' '}
        <span className='bg-gray-100 rounded-lg p-1'>.webp</span>{' '}
        <span className='bg-gray-100 rounded-lg p-1'>.gif</span>
      </div>
      <input className='hidden' type='file' />
    </label>
  );
};

export default ImageElement;
