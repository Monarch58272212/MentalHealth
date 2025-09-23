import {
  Box,
  Flex,
  SimpleGrid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';
import { GiSkeleton } from 'react-icons/gi';

export default function ThirdSkeleton() {
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
      <Flex justify={'space-between'} flexDir={['column', 'row']} w={'100%'}>
        <Flex flexDir={'column'} w={['60%', '40%', '25%', '25%']}>
          <Flex gap={2} align={'center'} w={'100%'}>
            <SkeletonCircle size="2" />{' '}
            <SkeletonText noOfLines={1} skeletonHeight={3} w="50%" />
          </Flex>

          <SkeletonText mt={3} skeletonHeight={5} noOfLines={2} w={'100%'} />
        </Flex>
        <Flex w={['100%', '55%', '50%']}>
          <SkeletonText
            noOfLines={4}
            w="100%"
            mt={[3, 3, 0, 0]}
            spacing="4"
            skeletonHeight="2"
          />
        </Flex>
      </Flex>
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
            >
              <Skeleton
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                p={4}
                color="white"
              />
            </Box>
          ))}
      </SimpleGrid>
    </Flex>
  );
}
