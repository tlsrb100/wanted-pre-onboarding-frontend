import PrivateRouter from '../components/@helper/router/PrivateRouter';
import Auth from './Auth/index';
import PublicRouter from '../components/@helper/router/PublicRouter';
import Todo from './Todo/index';
import ROUTES from '../constants/routes';
const Pages = [
  {
    element: <PrivateRouter />,
    children: [
      {
        path: ROUTES.TODO.PATH,
        element: <Todo />,
      },
    ],
  },
  {
    element: <PublicRouter />,
    children: [
      {
        path: ROUTES.AUTH.PATH,
        element: <Auth />,
      },
    ],
  },
];

export default Pages;
