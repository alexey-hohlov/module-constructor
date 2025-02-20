import { createHashRouter } from 'react-router';

import { Layout } from '@/components';
import { ROUTES } from '@/constants';
import {
  ConstructorPage,
  CoursePage,
  NotFoundPage,
  SettingsPage,
  StudentsPage,
} from '@/pages';

export const router = createHashRouter([
  {
    path: ROUTES.HOME.PATH,
    element: <Layout />,
    children: [
      {
        element: <ConstructorPage />,
        index: true,
      },
      { path: ROUTES.STUDENTS.PATH, element: <StudentsPage /> },
      { path: ROUTES.COURSE.PATH, element: <CoursePage /> },
      { path: ROUTES.COURSE_SETTINGS.PATH, element: <SettingsPage /> },
      { path: ROUTES.NOT_FOUND.PATH, element: <NotFoundPage /> },
    ],
  },
]);
