import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../components/AppContext';
import { api } from '../api';
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export default function UserInfo() {
  const [userData, setUserData] = useState<null | UserData>();
  const navigate = useNavigate();

  const { isLoggedIn } = useAppContext();

  !isLoggedIn && navigate('/');

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  if (!userData) {
    navigate('/');
  }

  return (
    <Box minHeight="100vh" backgroundColor="#E3F4F4" padding="24px">
      <Container>
        <Center>
          <Box backgroundColor="#FFFFFF" borderRadius="16px" padding="16px">
            <Heading marginBottom={8}>Meus Dados</Heading>

            <Text fontSize="lg" fontWeight="bold">
              Nome
            </Text>
            <Text>{userData?.name}</Text>
            <Text fontSize="lg" fontWeight="bold">
              Email
            </Text>
            <Text>{userData?.email}</Text>
            <Text fontSize="lg" fontWeight="bold">
              Senha
            </Text>
            <Text>*******</Text>
            <Text fontSize="lg" fontWeight="bold">
              ID
            </Text>
            <Text>{userData?.id}</Text>
          </Box>
        </Center>
      </Container>
    </Box>
  );
}
