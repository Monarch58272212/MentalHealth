import { Button, Flex, Text } from '@chakra-ui/react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { MdAddCall, MdOutlineMail } from 'react-icons/md';

export default function EighthPage() {
  console.log(`8th rendered`);
  return (
    <Flex
      w="100%"
      mt={[3, 5, 7, 10]}
      px={8}
      mb={10}
      justify={'center'}
      align={'center'}
    >
      <Flex
        flexDir="column"
        justify={'center'}
        align={'center'}
        textAlign={'center'}
        gap={5}
        w={'100%'}
      >
        <Text fontSize={['4xl', '4xl', '5xl', '6xl']}>
          Have a Question? <br /> Were Here.
        </Text>
        <Text>
          Join thousands who have chosen Menta for compassionate, <br />{' '}
          innovative, and stigma-free mental health support.
        </Text>
        <Flex
          w={'100%'}
          flexDir={['column', 'column', 'row', 'row']}
          justify={'space-between'}
          align={'center'}
        >
          <Flex gap={2} display={['none', 'none', 'flex', 'flex']}>
            <Text p={3} borderRadius={'full'} border={'1px solid gray'}>
              <FaTiktok />
            </Text>
            <Text p={3} borderRadius={'full'} border={'1px solid gray'}>
              <CiFacebook />
            </Text>
            <Text p={3} borderRadius={'full'} border={'1px solid gray'}>
              <MdOutlineMail />
            </Text>
          </Flex>
          <Button
            gap={2}
            variant={'outline'}
            colorScheme="gray"
            border={'1px solid black'}
            borderRadius={'full'}
            w={'xs'}
          >
            Get Started Today
          </Button>
          <Flex gap={2} display={['none', 'none', 'flex', 'flex']}>
            <Text p={3} borderRadius={'full'} border={'1px solid gray'}>
              <MdAddCall />
            </Text>
            <Text p={3} borderRadius={'full'} border={'1px solid gray'}>
              <FaInstagram />
            </Text>
            <Text p={3} borderRadius={'full'} border={'1px solid gray'}>
              <FaLinkedin />
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
