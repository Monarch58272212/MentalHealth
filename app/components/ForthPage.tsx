'use client';

import { useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { ForthImage } from './types/types';

interface ForthPage {
  forthPageImage: ForthImage[];
}

export default function ForthPage({ forthPageImage }: ForthPage) {
  console.log(`4th rendered`);
  const [index, setIndex] = useState(0);
  const total = forthPageImage.length;

  const next = () => setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  const testimonial = forthPageImage[index];

  return (
    <Flex
      w="100%"
      mt={[3, 5, 7, 10]}
      px={8}
      gap={3}
      mb={10}
      flexDir="column"
      style={{ scrollMarginTop: '100px' }}
      id="testimonial"
    >
      <Flex justify="space-between" flexDir={['column', 'row']} w="100%">
        <Flex flexDir="column">
          <Text fontSize={['sm', 'md', 'md']}>• Testimonial</Text>
          <Text fontSize={['lg', 'lg', '3xl']}>What Our Users Say</Text>
        </Flex>
        <Text w={['90%', '50%', '50%']} color="gray.600" fontSize="sm">
          Our users love the simplicity and efficiency of our platform. They've
          shared stories of increased productivity, seamless experiences, and
          transformative results that make a real difference in their daily
          lives.
        </Text>
      </Flex>

      <Flex align="center" gap={10} display={['none', 'none', 'flex', 'flex']}>
        <Flex
          p={5}
          w="170px"
          justify="center"
          align="center"
          position="relative"
          flexDir="column"
          h="180px"
          bg="gray.300"
          borderRadius="lg"
        >
          <Text fontSize="3xl" mb={8}>
            {index + 1}/{total}
          </Text>
          <Flex
            justify="center"
            align="center"
            gap={2}
            position="absolute"
            bottom={2}
          >
            <Avatar
              size="md"
              name={testimonial.name}
              src={testimonial.avatar}
            />
            <Flex flexDir="column">
              <Text fontSize="sm">{testimonial.name}</Text>
              <Text fontSize="sm">{testimonial.custumer}</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex gap={3} flexDir="column">
          <Button
            onClick={prev}
            borderWidth={1}
            bg="gray.300"
            variant="ghost"
            borderRadius="full"
          >
            <ArrowBackIcon />
          </Button>
          <Button
            onClick={next}
            variant="outline"
            bg="gray.300"
            borderRadius="full"
          >
            <ArrowForwardIcon />
          </Button>
        </Flex>

        <Flex w="50%">
          <Text>{testimonial.message}</Text>
        </Flex>

        <Flex
          position="relative"
          w="30%"
          h="300px"
          borderRadius="md"
          overflow="hidden"
        >
          <Image
            src={
              'https://plus.unsplash.com/premium_photo-1723568428757-597b8f2c3f83?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            alt={'image lang'}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Flex>
      </Flex>

      {/* Mobile*/}
      <Flex
        flexDir={'column'}
        gap={3}
        display={['flex', 'flex', 'none', 'none']}
      >
        <Flex
          justify="flex-start"
          align="center"
          gap={2}
          flexDir={'row'}
          bottom={2}
        >
          <Avatar size="sm" name={testimonial.name} src={testimonial.avatar} />
          <Flex flexDir="column">
            <Text fontSize="xs">{testimonial.name}</Text>
            <Text fontSize="xs">{testimonial.custumer}</Text>
          </Flex>
        </Flex>

        <Flex m={'auto'} borderWidth={1} p={4} w="95%">
          <Text color={'gray.700'} fontSize="sm">
            {testimonial.message}
          </Text>
        </Flex>

        <Flex gap={3}>
          <Button
            onClick={prev}
            borderWidth={1}
            bg="gray.300"
            variant="ghost"
            borderRadius="full"
          >
            <ArrowBackIcon />
          </Button>
          <Button
            onClick={next}
            variant="outline"
            bg="gray.300"
            borderRadius="full"
          >
            <ArrowForwardIcon />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
