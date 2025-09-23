'use client';

import {
  Box,
  Button,
  Flex,
  Skeleton,
  SkeletonText,
  SimpleGrid,
  Text,
  SkeletonCircle,
} from '@chakra-ui/react';

export default function FifthPageSkeleton() {
  return (
    <Flex
      style={{ scrollMarginTop: '100px' }}
      w="100%"
      mt={[3, 5, 7, 10]}
      px={8}
      gap={3}
      mb={10}
      flexDir="column"
      id="team"
    >
      {/* Header Section */}
      <Flex justify="space-between" flexDir={['column', 'row']} w="100%">
        <Flex flexDir={'column'} w={['60%', '40%', '25%', '25%']}>
          <Flex gap={2} align={'center'} w={'100%'}>
            <SkeletonCircle size="2" />{' '}
            <SkeletonText noOfLines={1} skeletonHeight={3} w="50%" />
          </Flex>

          <SkeletonText mt={3} skeletonHeight={5} noOfLines={2} w={'100%'} />
        </Flex>
        <SkeletonText
          w={['90%', '50%', '50%']}
          noOfLines={4}
          spacing="3"
          skeletonHeight="3"
        />
      </Flex>

      {/* Skeleton Grid */}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <Box
              key={i}
              position="relative"
              w="100%"
              h="300px"
              borderRadius="md"
              overflow="hidden"
              bg="gray.200"
            >
              <Skeleton height="100%" width="100%" />

              <Flex
                position="absolute"
                bottom="0"
                w="90%"
                m={3}
                borderRadius="lg"
                backdropFilter="blur(15px)"
                p={4}
                justify="space-between"
                align="center"
                flexDir="row"
                bg="rgba(255, 255, 255, 0.1)"
              >
                <Flex flexDir="column" gap={2} w="95%">
                  <Skeleton height="10px" w="80%" />
                  <Skeleton height="10px" w="60%" />
                </Flex>
                <Skeleton height="30px" width="30px" borderRadius="full" />
              </Flex>
            </Box>
          ))}
      </SimpleGrid>
    </Flex>
  );
}
