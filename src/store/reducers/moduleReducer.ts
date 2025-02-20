import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IElement,
  ILesson,
  IModule,
  IModuleStore,
  ITask,
  LessonType,
} from '@/types/moduleTypes';
import {
  selectElementIndex,
  selectLessonIndex,
  selectModuleIndex,
  selectTaskIndex,
} from '../selectors';

const initialState: IModuleStore = {
  modules: {},
  modulesIds: [],
  selectedModule: null,
  selectedLesson: null,
};

export const moduleSlice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<IModuleStore>) {
      return { ...state, ...action.payload };
    },
    selectModule(state, action: PayloadAction<string>) {
      if (state.selectedModule === action.payload) {
        state.selectedModule = null;
        return;
      }
      state.selectedLesson = null;
      state.selectedModule = action.payload;
    },
    selectLesson(state, action: PayloadAction<string>) {
      if (state.selectedLesson === action.payload) {
        state.selectedLesson = null;
        return;
      }
      state.selectedLesson = action.payload;
    },
    addModule(state, action: PayloadAction<IModule>) {
      state.modules[action.payload.id] = action.payload;
      state.modulesIds.push(action.payload.id);
    },
    deleteModule(state, action: PayloadAction<string>) {
      const moduleIndex = selectModuleIndex(state, action.payload);
      const modules = { ...state.modules };
      delete modules[action.payload];
      state.modules = modules;
      state.modulesIds.splice(moduleIndex, 1);
      state.selectedModule = null;
      state.selectedLesson = null;
    },
    editModule(
      state,
      action: PayloadAction<{ title: string; moduleId: string }>
    ) {
      const { title, moduleId } = action.payload;
      state.modules[moduleId].title = title;
    },
    addLesson(
      state,
      action: PayloadAction<{ moduleId: string; lesson: ILesson }>
    ) {
      const { moduleId, lesson } = action.payload;
      state.modules[moduleId].lessons[lesson.id] = lesson;
      state.modules[moduleId].lessonsIds.push(lesson.id);
    },
    deleteLesson(state) {
      const { modules, selectedModule, selectedLesson } = state;
      if (selectedModule === null || selectedLesson === null) return;
      const newModules = { ...state.modules };
      const lessonIndex = selectLessonIndex(
        state,
        selectedModule,
        selectedLesson
      );
      delete modules[selectedModule].lessons[selectedLesson];
      state.modules = newModules;
      state.modules[selectedModule].lessonsIds.splice(lessonIndex, 1);
      state.selectedLesson = null;
    },
    editLesson(state, action: PayloadAction<{ title: string; type: string }>) {
      const { title, type } = action.payload;
      const { selectedModule, selectedLesson } = state;
      if (selectedModule === null || selectedLesson === null) return;
      state.modules[selectedModule].lessons[selectedLesson].title = title;
      state.modules[selectedModule].lessons[selectedLesson].type =
        type as LessonType;
    },
    addElement(state, action: PayloadAction<IElement>) {
      const { selectedModule, selectedLesson } = state;
      if (selectedModule === null || selectedLesson === null) return;
      state.modules[selectedModule].lessons[selectedLesson].elements.push(
        action.payload
      );
    },
    deleteElement(state, action: PayloadAction<string>) {
      const { selectedModule, selectedLesson } = state;
      if (selectedModule === null || selectedLesson === null) return;
      const elementIndex = selectElementIndex(
        state,
        selectedModule,
        selectedLesson,
        action.payload
      );
      state.modules[selectedModule].lessons[selectedLesson].elements.splice(
        elementIndex,
        1
      );
    },
    addTask(state, action: PayloadAction<ITask>) {
      const { selectedModule, selectedLesson } = state;
      if (selectedModule === null || selectedLesson === null) return;
      state.modules[selectedModule].lessons[selectedLesson].tasks.push(
        action.payload
      );
    },
    deleteTask(state, action: PayloadAction<string>) {
      const { selectedModule, selectedLesson } = state;
      if (selectedModule === null || selectedLesson === null) return;
      const taskIndex = selectTaskIndex(
        state,
        selectedModule,
        selectedLesson,
        action.payload
      );
      state.modules[selectedModule].lessons[selectedLesson].tasks.splice(
        taskIndex,
        1
      );
    },
  },
});

export default moduleSlice.reducer;
