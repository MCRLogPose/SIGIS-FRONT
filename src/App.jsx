import './App.css'
import { BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import LoginPage from './features/auth/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App
