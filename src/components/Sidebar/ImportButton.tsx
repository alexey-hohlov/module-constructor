import { ImportIcon } from '@/assets';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { generateId } from '@/utils/generateId';
import { isValidModule } from '@/utils/validations';
import { useState } from 'react';
import Dialog from '../common/Dialog';

const ImportButton: React.FC = () => {
  const { addModule } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const [error, setError] = useState<string>();

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setError('');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith('.json')) {
      setError('Файл должен быть в формате JSON');
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      const json = e.target?.result as string;
      try {
        const module = JSON.parse(json);
        if (!isValidModule(module)) {
          setError(
            'Загруженный файл не соответствует ожидаемой структуре модуля'
          );
          return;
        }
        module.id = generateId();
        dispatch(addModule(module));
      } catch (error) {
        setError('Ошибка при парсинге JSON');
      }
    };
    reader.readAsText(file);
  };

  return (
    <>
      <label className='bg-teal-600/15 p-2 rounded-lg cursor-pointer'>
        <ImportIcon className='fill-teal-600 size-4' />
        <input type='file' className='hidden' onChange={handleImport} />
      </label>
      <Dialog isOpen={!!error} onClose={handleClose}>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h3 className='text-2xl font-bold text-red-400'>Ошибка</h3>
          <span className='text-center'>{error}</span>
        </div>
      </Dialog>
    </>
  );
};

export default ImportButton;
