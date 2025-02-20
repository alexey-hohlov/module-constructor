import { ROUTES } from '@/constants';
import { NavItem } from '@/components';

const NavBar: React.FC = () => {
  return (
    <nav className='flex items-center justify-center gap-6'>
      <NavItem path={ROUTES.HOME.PATH} title={'Конструктор'} />
      <NavItem path={ROUTES.STUDENTS.PATH} title={'Ученики курса'} />
      <NavItem path={ROUTES.COURSE.PATH} title={'Страница курса'} />
      <NavItem path={ROUTES.COURSE_SETTINGS.PATH} title={'Настройки курса'} />
    </nav>
  );
};

export default NavBar;
