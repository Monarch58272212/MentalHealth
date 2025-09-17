import { Text } from '@chakra-ui/react';
import React from 'react';

interface Counting {
  text: string;
  count: number;
}

function Count({ text, count }: Counting) {
  console.log(`Rendering ${text}`);
  return (
    <Text>
      {text} - {count}
    </Text>
  );
}

export default React.memo(Count);
