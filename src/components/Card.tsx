import { Box, Center, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { login } from '../services/login';
import CustomButton from './CustomButton';

export const Card = () => {
  return (
    <Box minHeight="100vh" backgroundColor="#E3F4F4" padding="24px">
      <Box backgroundColor="#FFFFFF" borderRadius="16px" padding="16px">
        <Center>
          <h1 style={{ fontSize: 24, marginBottom: 16 }}>Faça o login</h1>
        </Center>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input placeholder="Insira seu email" marginBottom={4} />
        </FormControl>
        <FormControl>
          <FormLabel>Senha:</FormLabel>
          <Input placeholder="Insira sua senha" marginBottom={4} />
        </FormControl>
        <CustomButton title="Login" onClick={login} />
      </Box>
    </Box>
  );
};
