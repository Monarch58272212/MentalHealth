import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { ThirdImage } from './types/types';
import Image from 'next/image';

interface ThirdPageData {
  thirdPageImage: ThirdImage[];
}

export default function ThirdPage({ thirdPageImage }: ThirdPageData) {
  return (
    <Flex
      w={'100%'}
      mt={[3, 5, 7, 10]}
      px={8}
      flexDir={'column'}
      gap={3}
      mb={10}
    >
      <Flex justify={'space-between'} flexDir={['column', 'row']} w={'100%'}>
        <Flex flexDir={'column'}>
          <Text fontSize={['sm', 'md', 'md']}>• Features & Benefit</Text>
          <Text fontSize={['lg', 'lg', '3xl']}>
            Your Path To Better <br /> Mental Health
          </Text>
        </Flex>
        <Text w={['90%', '50%', '50%']} color={'gray.600'} fontSize={'sm'}>
          Discover a supportive journey toward improved mental well-being.
          Prioritize self-care, connect with resources, and embrace growth with
          expert guidance designed to empower your mental health every step of
          the way.
        </Text>
      </Flex>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {thirdPageImage.map((p, i) => (
          <Box
            key={i}
            position="relative"
            w="100%"
            h="300px"
            borderRadius="md"
            overflow="hidden"
          >
            <Image
              src={p.photo}
              alt={p.title}
              fill
              style={{
                objectFit: 'cover',
              }}
            />

            <Flex
              position="absolute"
              top={0}
              left={0}
              w="100%"
              h="100%"
              bg="rgba(0,0,0,0.4)"
              direction="column"
              justify="space-between"
              p={4}
              color="white"
            >
              <Flex justify="space-between" align="center">
                <Text fontSize="md" fontWeight="bold">
                  {p.title}
                </Text>
                <Button
                  color="white"
                  size="xs"
                  variant="outline"
                  borderRadius="full"
                >
                  {p.icon}
                </Button>
              </Flex>

              <Text fontSize="sm">{p.content}</Text>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
