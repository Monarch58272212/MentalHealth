import { PhoneIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';

export default function SeventhPage() {
  return (
    <Flex
      w="95%"
      h={'md'}
      mt={[3, 5, 7, 10]}
      px={8}
      mb={10}
      borderWidth={1}
      bg={'gray.300'}
      borderRadius={'lg'}
      justify={'center'}
      align={'center'}
    >
      <Flex
        flexDir="column"
        justify={'center'}
        align={'center'}
        textAlign={'center'}
        gap={5}
      >
        <Text fontSize={['4xl', '4xl', '5xl', '6xl']}>
          Start Prioritizing Your Mental <br /> Health Today
        </Text>
        <Text>
          Join thousands who have chosen Menta for compassionate, <br />{' '}
          innovative, and stigma-free mental health support.
        </Text>
        <Button gap={2} borderRadius={'full'}>
          <PhoneIcon /> Contact Us for More Info
        </Button>
      </Flex>
    </Flex>
  );
}
