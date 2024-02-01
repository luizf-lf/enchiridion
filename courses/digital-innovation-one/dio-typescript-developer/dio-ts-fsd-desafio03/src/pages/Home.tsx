/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Center, Container, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../components/AppContext';
import { login } from '../services/login';
import { changeLocalStorage, getAllLocalStorage } from '../services/storage';
import CustomButton from '../components/CustomButton';

const Home = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert('Email inválido');
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: email, password });
    navigate('/conta/1');
  };

  useEffect(() => {
    const doLogin = async () => {
      const auth = getAllLocalStorage();

      if (!auth) {
        return;
      }

      const loggedIn = await login(auth.login, auth.password);

      if (loggedIn) {
        setIsLoggedIn(true);
        navigate('/conta/1');
      }
    };

    doLogin();
  }, []);

  return (
    <Box minHeight="100vh" backgroundColor="#E3F4F4" padding="24px">
      <Container>
        <Box backgroundColor="#FFFFFF" borderRadius="16px" padding="16px">
          <Center>
            <h1 style={{ fontSize: 24, marginBottom: 16 }}>Faça o login</h1>
          </Center>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              placeholder="Insira seu email"
              marginBottom={4}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Senha:</FormLabel>
            <Input
              placeholder="Insira sua senha"
              marginBottom={4}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </FormControl>
          <CustomButton title="Login" onClick={() => validateUser(email, password)} />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
