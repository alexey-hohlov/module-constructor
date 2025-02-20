import { useMemo, useState } from 'react';

import { AddIcon, DoneIcon, ExportIcon } from '@/assets';
import {
  AddLesson,
  AddModule,
  Button,
  ImportButton,
  ModuleItem,
  SearchBar,
} from '@/components';
import { useAppSelector } from '@/hooks/reduxHooks';
import { downloadJSON } from '@/utils/downloadJSON';

const Sidebar: React.FC = () => {
  const { modulesIds, modules, selectedModule } = useAppSelector(
    state => state.moduleReducer
  );

  const [moduleDialog, setModuleDialog] = useState<boolean>(false);
  const [lessonDialog, setLessonDialog] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredModules = useMemo(() => {
    return modulesIds.filter(id => {
      const module = modules[id];
      return module.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, modulesIds, modules]);

  const toggleAddModule = () => {
    setModuleDialog(prev => !prev);
  };

  const toggleAddLesson = () => {
    setLessonDialog(prev => !prev);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleExport = () => {
    if (selectedModule === null) return;
    downloadJSON(modules[selectedModule], modules[selectedModule].title);
  };

  return (
    <div className='bg-white rounded-lg p-4 flex flex-col justify-between w-[340px] flex-none'>
      <div className='flex flex-col gap-3 flex-1 overflow-y-hidden'>
        <h1 className='font-medium text-gray-500'>Ваши Модули</h1>
        <div className='flex items-center gap-2'>
          <SearchBar setQuery={handleSearch} />
          <ImportButton />
          <Button
            className='flex gap-1 items-center justify-center text-teal-600 bg-teal-600/15 h-full'
            disabled={!selectedModule}
            onClick={handleExport}
          >
            <ExportIcon className='fill-teal-600 size-4' />
          </Button>
        </div>
        <ul className='flex flex-col gap-2 h-full overflow-y-auto pr-4'>
          {filteredModules.map(id => (
            <ModuleItem key={id} module={modules[id]} />
          ))}
        </ul>
        <Button
          title='Занятие'
          className='flex gap-1 items-center justify-center text-teal-600 bg-teal-600/15 h-11 flex-none'
          onClick={toggleAddLesson}
          disabled={!!!selectedModule}
        >
          <AddIcon className='fill-teal-600 size-4' />
        </Button>
        <Button
          title='Модуль'
          className='flex gap-1 items-center justify-center text-white bg-teal-600 h-11 flex-none'
          onClick={toggleAddModule}
        >
          <AddIcon className='fill-white size-4' />
        </Button>
      </div>
      <Button
        title='Завершение курса'
        className='flex gap-1 items-center text-gray-500 bg-gray-100 h-11 flex-none mt-4'
      >
        <DoneIcon className='fill-gray-500 size-4' />
      </Button>
      <AddModule isOpen={moduleDialog} onClose={toggleAddModule} />
      <AddLesson isOpen={lessonDialog} onClose={toggleAddLesson} />
    </div>
  );
};

export default Sidebar;
