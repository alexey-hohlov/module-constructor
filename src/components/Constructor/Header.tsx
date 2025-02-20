import { useState } from 'react';

import { AddIcon, DeleteIcon, LessonIcon, SettingsIcon } from '@/assets';
import { Button, LessonSettings, WarningModal } from '@/components';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { LessonType } from '@/types/moduleTypes';

interface Props {
  title: string;
  type: string;
  addElement: () => void;
  addTask: () => void;
}

const Header: React.FC<Props> = ({ title, type, addElement, addTask }) => {
  const [settingsDialog, setSettingsDialog] = useState<boolean>(false);
  const [deletingModal, setDeletingModal] = useState<boolean>(false);
  const { deleteLesson } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const toggleSettings = () => {
    setSettingsDialog(prev => !prev);
  };

  const toggleDeleting = () => {
    setDeletingModal(prev => !prev);
  };

  const handleDelete = () => {
    dispatch(deleteLesson());
  };

  return (
    <header className='bg-white rounded-lg px-6 py-4'>
      <div className='flex justify-between items-center h-full'>
        <div className='flex flex-col overflow-hidden'>
          <div className='font-bold flex gap-1 items-center'>
            <LessonIcon className='fill-teal-600/60 flex-none' />
            <span className='truncate'>{title}</span>
          </div>
          <span className='text-gray-500'>
            {type === LessonType.lecture && 'Лекция'}
            {type === LessonType.practical && 'Практическое занятие'}
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <Button
            title='Элемент'
            className='flex gap-1 items-center justify-center text-teal-600 bg-teal-600/15 h-11'
            onClick={e => {
              e.stopPropagation();
              addElement();
            }}
          >
            <AddIcon className='fill-teal-600' />
          </Button>
          <Button
            title='Задание'
            className='flex gap-1 items-center justify-center text-white bg-teal-600 h-11'
            onClick={e => {
              e.stopPropagation();
              addTask();
            }}
          >
            <AddIcon className='fill-white' />
          </Button>
          <Button className='bg-gray-100 h-11' onClick={toggleSettings}>
            <SettingsIcon className='fill-gray-400' />
          </Button>
          <Button className='bg-red-400/15 h-11' onClick={toggleDeleting}>
            <DeleteIcon className='fill-red-400' />
          </Button>
        </div>
      </div>
      <LessonSettings
        isOpen={settingsDialog}
        onClose={toggleSettings}
        title={title}
        type={type}
      />
      <WarningModal
        isOpen={deletingModal}
        itemName={title}
        handleDelete={handleDelete}
        onClose={toggleDeleting}
      />
    </header>
  );
};

export default Header;
