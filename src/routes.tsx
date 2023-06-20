import { Route, Routes } from 'react-router-dom';
import { useAppContext } from './components/AppContext';
import Conta from './pages/Conta';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

const MainRoutes = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route path="/my-profile" element={<UserInfo />} />
    </Routes>
  );
};

export default MainRoutes;
