import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { NavBar } from '@/components';
import { LOCAL_STORAGE_KEY } from '@/constants';
import { useAppDispatch } from '@/hooks/reduxHooks';
import useLocalStorage from '@/hooks/useLocalStorage';
import { moduleSlice } from '@/store/reducers/moduleReducer';

const Layout: React.FC = () => {
  const { setData } = moduleSlice.actions;
  const dispatch = useAppDispatch();

  const [storedData] = useLocalStorage(LOCAL_STORAGE_KEY);

  useEffect(() => {
    if (storedData) {
      dispatch(setData(storedData));
    }
  }, [dispatch]);

  return (
    <main className='layout bg-gray-100'>
      <NavBar />
      <div className='p-4'>
      <Outlet />
      </div>
    </main>
  );
};

export default Layout;
