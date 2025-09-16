import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function FirstPage() {
  return (
    <Flex
      w="100%"
      h={['80vh', '80vh', '100vh', '100vh']}
      justify="flex-end"
      align="flex-start"
      bgImage="url('/first.png')"
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      position="relative"
      flexDir={'column'}
      color={'black'}
      borderRadius={'3xl'}
    >
      <Flex ml={'2%'} flexDir={'column'} gap={2} backdropFilter="blur(1px)">
        <Flex flexDir={'column'} justify={'center'}>
          <Text fontSize={['3xl', '4xl', '6xl']} lineHeight="short">
            Your Mental <br /> Health Matters
          </Text>

          <Text
            color={'gray.700'}
            fontSize={['xs', 'md', 'lg']}
            w={['90%', '80', '100%']}
          >
            Accessible, stigma-free mental health support that combines <br />
            innovation, emphathy, and personalized care.
          </Text>
        </Flex>
        <Flex
          mb={'10%'}
          justify={'flex-start'}
          flexDir={['column', 'column', 'row']}
          align={['flex-start', 'flex-start', 'center']}
          gap={3}
        >
          <Button
            color={'black'}
            colorScheme="black"
            borderRadius={'full'}
            variant={'outline'}
            size={['sm', 'md']}
          >
            Get Started Today
          </Button>
          <Flex justify={'center'} align={'center'} gap={2}>
            <Text fontSize={['xs', 'md', 'lg']}>Have a Questions?</Text>
            <Avatar
              size="sm"
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
            />
            <ExternalLinkIcon />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
