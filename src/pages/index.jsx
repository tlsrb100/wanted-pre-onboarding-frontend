import PrivateRouter from '../components/@helper/router/PrivateRouter';
import Auth from './Auth/index';
import PublicRouter from '../components/@helper/router/PublicRouter';
import Todo from './Todo/index';

const Pages = [
  {
    element: <PrivateRouter />,
    children: [
      {
        path: '/todo',
        element: <Todo />,
      },
    ],
  },
  {
    element: <PublicRouter />,
    children: [
      {
        path: '/',
        element: <Auth />,
      },
    ],
  },
];

export default Pages;
