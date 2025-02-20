import { LessonType } from './moduleTypes';

export interface IModuleForm {
  moduleTitle: string;
}

export interface ILessonForm {
  lessonTitle: string;
  // lessonType: string;
  lessonType: LessonType;
}
