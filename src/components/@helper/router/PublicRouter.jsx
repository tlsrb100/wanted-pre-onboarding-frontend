import { Navigate, Outlet } from 'react-router-dom';

const PublicRouter = () => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken ? <Navigate to='/todo' /> : <Outlet />;
};

export default PublicRouter;
