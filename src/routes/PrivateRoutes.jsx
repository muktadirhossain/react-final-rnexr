import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import MainLayout from '../layout/MainLayout';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context';

const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext)

  return (
    <>
      {
        auth?.accessToken ?
          <MainLayout>
            <Outlet />
          </MainLayout>
          : <Navigate to='/login' />
      }
    </>
  )
}

export default PrivateRoutes