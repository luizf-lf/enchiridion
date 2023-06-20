import { Button, Flex, Spacer } from '@chakra-ui/react';
import { useAppContext } from './AppContext';
import { Link, useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    changeLocalStorage({ login: '', password: '' });
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Flex style={{ padding: 8 }}>
      <p style={{ fontSize: 24, fontWeight: 'bold' }}>Dio Bank</p>
      <Spacer />
      {isLoggedIn && (
        <>
          <Link to="/my-profile">
            <Button style={{ marginRight: 8 }}>Meu Perfil</Button>
          </Link>
          <Button onClick={() => handleLogout()}>Logout</Button>
        </>
      )}
    </Flex>
  );
};
