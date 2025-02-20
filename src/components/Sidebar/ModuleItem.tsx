import { useState } from 'react';

import { CollapseIcon } from '@/assets';
import { IModule } from '@/types/moduleTypes';
import {
  EditModule,
  LessonItem,
  Menu,
  ModuleMenu,
  WarningModal,
} from '@/components';
import { moduleSlice } from '@/store/reducers/moduleReducer';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks';

interface Props {
  module: IModule;
}

const ModuleItem: React.FC<Props> = ({ module }) => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  const { selectedModule } = useAppSelector(state => state.moduleReducer);
  const { deleteModule, selectModule } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteModule(module.id));
  };

  const handleSelect = () => {
    dispatch(selectModule(module.id));
  };

  const toggleEditing = () => {
    setEditModal(prev => !prev);
  };

  const toggleDeleting = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDeleteModal(prev => !prev);
  };

  return (
    <li className='flex flex-col gap-2 w-full'>
      <div
        className={`w-full shadow select-none cursor-pointer rounded-lg h-10 p-2 flex items-center justify-between ${
          module.id === selectedModule ? 'bg-gray-100' : 'bg-white'
        }`}
        onClick={handleSelect}
      >
        <div className='flex items-center gap-2 flex-1 overflow-hidden'>
          <CollapseIcon
            className={`fill-gray-400 ${
              module.id === selectedModule && 'rotate-180'
            } `}
          />
          <span className='font-medium truncate'>{module.title}</span>
        </div>
        <Menu id={module.id} closeDep={[deleteModal]}>
          <ModuleMenu
            deleteModule={toggleDeleting}
            editModule={toggleEditing}
          />
        </Menu>
      </div>
      {module.id === selectedModule && (
        <ul className='flex flex-col items-end gap-3'>
          {module.lessonsIds.map(id => (
            <LessonItem key={id} lesson={module.lessons[id]} />
          ))}
        </ul>
      )}
      <WarningModal
        isOpen={deleteModal}
        onClose={toggleDeleting}
        itemName={module.title}
        handleDelete={handleDelete}
      />
      <EditModule
        isOpen={editModal}
        onClose={toggleEditing}
        id={module.id}
        title={module.title}
      />
    </li>
  );
};

export default ModuleItem;
