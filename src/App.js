import { useRoutes } from 'react-router-dom';
import Pages from './pages/index';

function App() {
  const pages = useRoutes(Pages);
  return pages;
}

export default App;
