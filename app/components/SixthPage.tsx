import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { SixthImage } from './types/types';
interface SixthPage {
  sixthPageImage: SixthImage[];
}

export default function SixthPage({ sixthPageImage }: SixthPage) {
  console.log(`6th rendered`);
  return (
    <Flex
      w="100%"
      mt={[3, 5, 7, 10]}
      px={8}
      gap={3}
      mb={10}
      flexDir="column"
      style={{ scrollMarginTop: '100px' }}
      id="how-it-works"
    >
      <Flex justify="space-between" flexDir={['column', 'row']} w="100%">
        <Flex flexDir="column">
          <Text fontSize={['sm', 'md', 'md']}>• How It Works</Text>
          <Text fontSize={['lg', 'lg', '3xl']}>
            Your Journey With <br /> Menta In 3 Simple Steps
          </Text>
        </Flex>
        <Text w={['90%', '50%', '50%']} color="gray.600" fontSize="sm">
          At Menta, effective mental health support starts with our team of
          qualified, compassionate experts. They bring specialized skills,
          extensive experience, and a deep commitment to guiding you toward
          mental wellness.
        </Text>
      </Flex>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {sixthPageImage.map((p, i) => (
          <Box
            bg={'gray.300'}
            key={i}
            position="relative"
            w="100%"
            h={['200px', '200px', '200px', '250px']}
            borderRadius="md"
            overflow="hidden"
            justifyContent={'center'}
            display={'flex'}
            alignItems={'flex-end'}
          >
            <Flex
              h={'100%'}
              borderRadius={10}
              p={4}
              justify={'space-around'}
              align={'center'}
              flexDir={'column'}
              mb={3}
            >
              <Text fontSize={'sm'}>{p.description}</Text>
              <Text fontSize={'6xl'}>{p.icon}</Text>
              <Text fontSize={'lg'}>{p.title}</Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
