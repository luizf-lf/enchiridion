import { Button } from '@chakra-ui/react';

interface Props {
  onClick: () => void;
  title: string;
}

export default function CustomButton({ onClick, title }: Props) {
  return (
    <Button onClick={onClick} colorScheme="teal" width="100%" marginBottom={4}>
      {title}
    </Button>
  );
}
