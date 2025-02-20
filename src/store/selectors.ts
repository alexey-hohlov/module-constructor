import { IModuleStore } from '@/types/moduleTypes';

export const selectModuleIndex = (state: IModuleStore, moduleId: string) => {
  return state.modulesIds.findIndex(id => id === moduleId);
};

export const selectLessonIndex = (
  state: IModuleStore,
  moduleId: string,
  lessonId: string
) => {
  return state.modules[moduleId].lessonsIds.findIndex(id => id === lessonId);
};

export const selectElementIndex = (
  state: IModuleStore,
  moduleId: string,
  lessonId: string,
  elementId: string
) => {
  return state.modules[moduleId].lessons[lessonId].elements.findIndex(
    element => element.id === elementId
  );
};

export const selectTaskIndex = (
  state: IModuleStore,
  moduleId: string,
  lessonId: string,
  taskId: string
) => {
  return state.modules[moduleId].lessons[lessonId].tasks.findIndex(
    task => task.id === taskId
  );
};
