import { Flex, Button } from '@chakra-ui/react';
import React from 'react';

interface Buttons {
  colorScheme: string;
  handleClick: () => void;
  children: React.ReactNode;
}

function Buttonss({ handleClick, children }: Buttons) {
  console.log(`Rendering Button -`, children);
  return (
    <Flex>
      <Button colorScheme={'blue'} onClick={handleClick}>
        {children}
      </Button>
    </Flex>
  );
}
export default React.memo(Buttonss);
