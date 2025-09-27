'use client';

import {
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';

export default function () {
  return (
    <Flex
      id="about"
      style={{ scrollMarginTop: '100px' }}
      mt={[3, 5, 7, 10]}
      w="100%"
      p={8}
      justify={['center', 'center', 'flex-start']}
      align="flex-start"
      gap={3}
      flexDir={['column', 'column', 'column', 'row']}
    >
      <Flex
        maxW={['300px']}
        borderRadius="lg"
        position={'relative'}
        boxShadow="lg"
        flexDir={'column'}
      >
        <Flex w={'100%'} h={'md'}>
          <Skeleton w={'md'} />
        </Flex>

        <Flex
          justify={'center'}
          align={'center'}
          gap={2}
          position={'absolute'}
          bottom={2}
          right={10}
          color={'white'}
          flexDir={['row']}
        >
          <SkeletonText startColor="gray.500" noOfLines={2}>
            Have a Questions?
          </SkeletonText>

          <SkeletonCircle size="10" startColor="gray.500" />

          <SkeletonCircle size="5" startColor="gray.500" />
        </Flex>
      </Flex>
      <Flex
        flexDir={'column'}
        align={'flex-start'}
        justify={'flex-start'}
        gap={3}
      >
        <Text fontSize={['sm', 'md', 'md']}>• About Us</Text>
        <Text fontSize={['lg', 'lg', '3xl']}>
          Why Choose Mental For <br /> Your Mental Health Wellness?{' '}
        </Text>

        <SimpleGrid spacing={[0, 1, 2, 2]} columns={[1, 2, 2, 4]}>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <Flex
                m={'auto'}
                key={index}
                w="100%"
                h={['90%', '150px', '150px', '150px']}
                borderRadius="lg"
                position="relative"
                boxShadow="md"
              >
                <Skeleton w={'md'} />
              </Flex>
            ))}
        </SimpleGrid>

        <Flex
          justify={'space-between'}
          w={'100%'}
          flexDir={['column-reverse', 'row', 'row']}
        >
          <SkeletonText
            maxW={'lg'}
            noOfLines={5}
            spacing="2"
            skeletonHeight="4"
          >
            At Menta, we're redefining mental health support. Combining
            cutting-edge technology with compassionate care, we make therapy
            approachable, personalized, and stigma- free. Whether you're seeking
            support for yourself or your community, Menta is here to guide you
            toward mental wellness.
          </SkeletonText>
          <Flex gap={3} mb={[3, 0]}>
            <SkeletonCircle size="10" />
            <SkeletonCircle size="10" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
