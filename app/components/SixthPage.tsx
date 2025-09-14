import { Flex, Text } from '@chakra-ui/react';

export default function SixthPage() {
  return (
    <Flex w="100%" mt={[3, 5, 7, 10]} px={8} gap={3} mb={10} flexDir="column">
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
    </Flex>
  );
}
