import { Box, Center, Container, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';
import CardInfo from '../components/CardInfo';
import { useAppContext } from '../components/AppContext';

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const { id } = useParams();
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

  if (userData && id !== userData.id) {
    navigate('/');
  }

  return (
    <Box minHeight="100vh" backgroundColor="#E3F4F4">
      <Container>
        <Center>
          <SimpleGrid columns={2} spacing={8} paddingTop={16}>
            {userData === undefined || userData === null ? (
              <Center>
                <Spinner size="xl" color="white" />
              </Center>
            ) : (
              <>
                <CardInfo label={`Bem vindo(a)`} content={userData?.name} />
                <CardInfo label="Saldo" content={`R$ ${userData.balance}`} />
              </>
            )}
          </SimpleGrid>
        </Center>
      </Container>
    </Box>
  );
};

export default Conta;
