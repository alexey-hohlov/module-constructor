import { IModule } from '@/types/moduleTypes';

const defaultMessage = 'Заполните это поле';

export const validations = {
  required: {
    required: defaultMessage,
  },
};

export const isValidModule = (module: any): module is IModule => {
  return (
    typeof module === 'object' &&
    module !== null &&
    typeof module.id === 'string' &&
    typeof module.title === 'string' &&
    typeof module.lessons === 'object' &&
    Array.isArray(module.lessonsIds)
  );
};
