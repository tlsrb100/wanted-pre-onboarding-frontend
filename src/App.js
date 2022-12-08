import { useRoutes } from 'react-router-dom';
import Pages from './pages/index';
import { setHeaderToken } from './utils/auth';

function App() {
  const pages = useRoutes(Pages);
  setHeaderToken();
  return pages;
}

export default App;
