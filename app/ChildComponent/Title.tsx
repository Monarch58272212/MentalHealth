import { Text } from '@chakra-ui/react';
import React from 'react';

function Title() {
  console.log(`Rendering Title`);
  return <Text color="green">Hello I am Title</Text>;
}

export default React.memo(Title);
