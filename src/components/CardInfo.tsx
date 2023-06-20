import { Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

interface ICardInfo {
  label: string;
  content: string;
}

const CardInfo = ({ label, content }: ICardInfo) => {
  return (
    <Box backgroundColor="white" minHeight="120px" padding={8} borderRadius="25px">
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{content}</StatNumber>
      </Stat>
    </Box>
  );
};

export default CardInfo;
