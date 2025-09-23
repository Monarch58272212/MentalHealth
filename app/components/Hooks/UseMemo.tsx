import { Button, Flex, Text } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

export default function WithUseMemo() {
  const [counterOne, setCountOne] = useState(0);
  const [counterTwo, setCountTwo] = useState(0);

  const incrementOne = () => setCountOne(counterOne + 1);
  const incrementTwo = () => setCountTwo(counterTwo + 1);

  const isEven = () => {
    console.log('🔁 Recomputing isEven (With useMemo)...');
    let i = 0;
    while (i < 200000000) i++; // super heavy loop
    return counterOne % 2 === 0;
  };

  return (
    <Flex
      direction="column"
      align="center"
      border="1px solid green"
      p={4}
      m={4}
    >
      <Text fontWeight="bold">✅ With useMemo</Text>
      <Text>{isEven() ? 'Even' : 'Odd'}</Text>
      <Button onClick={incrementOne} colorScheme="green" m={2}>
        Counter One - {counterOne}
      </Button>
      <Button onClick={incrementTwo} colorScheme="blue" m={2}>
        Counter Two - {counterTwo}
      </Button>
    </Flex>
  );
}
