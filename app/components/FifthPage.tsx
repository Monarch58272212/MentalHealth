import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { FifthImage } from './types/types';
import Image from 'next/image';

interface FifthPage {
  fifthPageImage: FifthImage[];
}

export default function ({ fifthPageImage }: FifthPage) {
  return (
    <Flex w="100%" mt={[3, 5, 7, 10]} px={8} gap={3} mb={10} flexDir="column">
      <Flex justify="space-between" flexDir={['column', 'row']} w="100%">
        <Flex flexDir="column">
          <Text fontSize={['sm', 'md', 'md']}>• Meet Our Experts</Text>
          <Text fontSize={['lg', 'lg', '3xl']}>
            Our Dedicated Mental <br /> Health Professionals
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
        <Box
          bg={'gray.300'}
          position="relative"
          w="100%"
          h="300px"
          borderRadius="md"
          overflow="hidden"
          p={3}
          display={'flex'}
          flexDir={'column'}
          justifyContent={'space-between'}
        >
          <Text fontSize={'2xl'}>
            Clinical Psychologist With 15+ Years Of Experience
          </Text>
          <Flex flexDir={'column'}>
            <Text>Specialties:</Text>
            <Text color={'gray.600'} fontSize={'sm'}>
              Depression, workplace stress, and cognitive behavioral therapy
              (CBT).
            </Text>
          </Flex>
        </Box>

        {fifthPageImage.map((p, i) => (
          <Box
            key={i}
            position="relative"
            w="100%"
            h="300px"
            borderRadius="md"
            overflow="hidden"
            justifyContent={'center'}
            display={'flex'}
            alignItems={'flex-end'}
          >
            <Image
              src={p.images}
              alt={p.name}
              fill
              style={{
                objectFit: 'cover',
              }}
            />

            <Flex
              w="90%"
              borderRadius={10}
              backdropFilter={'blur(15px)'}
              p={4}
              justify={'center'}
              align={'center'}
              flexDir={'row'}
              color={'white'}
              mb={3}
            >
              <Flex flexDir={'column'} gap={2} w={'95%'}>
                <Text fontSize={'xs'}>{p.name}</Text>
                <Text fontSize={'xs'}>{p.position}</Text>
              </Flex>
              <Button
                color="white"
                size="xs"
                variant="outline"
                borderRadius="full"
              >
                {p.icon}
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
