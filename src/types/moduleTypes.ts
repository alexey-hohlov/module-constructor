export enum LessonType {
  lecture = 'LECTURE',
  practical = 'PRACTICAL',
}

export enum TaskType {
  single = 'SINGLE',
  multiple = 'MULTIPLE',
  text = 'TEXT',
}

export interface ITask {
  title: string;
  type: TaskType;
  id: string;
}

export interface IElement {
  title: string;
  type: string;
  id: string;
}

export interface ILesson {
  title: string;
  elements: IElement[];
  type: LessonType;
  id: string;
  tasks: ITask[];
}

export interface IModule {
  title: string;
  id: string;
  lessons: {
    [key: string]: ILesson;
  };
  lessonsIds: string[];
}

export interface IModuleStore {
  modules: {
    [key: string]: IModule;
  };
  modulesIds: string[];
  selectedModule: string | null;
  selectedLesson: string | null;
}
