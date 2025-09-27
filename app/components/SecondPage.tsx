'use client';

import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import SecondSkeleton from './ui/SecondSkeleton';
import Image from 'next/image';

interface PageProps {
  id: string;
  secondImage: string;
  description: string;
}

export default function SecondPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<PageProps[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // optional delay

      const response = await fetch('/api/secondPage');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      toast({
        title: 'Failed to load data',
        description: error.message || 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  }, [data.length]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }, [data.length]);

  if (loading) return <SecondSkeleton />;

  if (!loading && data.length === 0) {
    return (
      <Flex justify="center" align="center" p={10}>
        <Text>No data found.</Text>
      </Flex>
    );
  }

  return (
    <Flex
      id="about"
      style={{ scrollMarginTop: '100px' }}
      mt={[3, 5, 7, 10]}
      w="100%"
      p={8}
      justify={['center', 'center', 'flex-start']}
      align="flex-start"
      bg="gray.100"
      gap={3}
      flexDir={['column', 'column', 'column', 'row']}
    >
      {/* Left Banner Image Section */}
      <Flex
        maxW={['90%', '90%', '300px', '300px']}
        borderRadius="lg"
        position="relative"
        boxShadow="lg"
        flexDir="column"
      >
        <Image
          src="/secondPage.jpg"
          alt="Banner"
          style={{ objectFit: 'contain', borderRadius: '0.5rem' }}
          layout="responsive"
          width={200}
          height={200}
          priority
        />
        <Flex
          justify="center"
          align="center"
          gap={2}
          position="absolute"
          bottom={2}
          right={10}
          color="white"
          flexDir="row"
        >
          <Text fontSize={['xs', 'md']}>Have a Questions?</Text>
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
          <ExternalLinkIcon />
        </Flex>
      </Flex>

      {/* Right Content Section */}
      <Flex
        flexDir="column"
        align="flex-start"
        justify="flex-start"
        gap={3}
        flex={1}
      >
        <Text fontSize={['sm', 'md']}>• About Us</Text>
        <Text fontSize={['lg', 'lg', '3xl']}>
          Why Choose Mental For <br /> Your Mental Health Wellness?
        </Text>

        {/* Image Slider Grid */}
        <SimpleGrid spacing={[2]} columns={[1, 2, 2, 4]} w={'100%'}>
          {data.map((img, index) => {
            const isActive = currentIndex === index;
            return (
              <Box
                key={img.id}
                m="auto"
                w="100%"
                h={
                  isActive
                    ? ['170px', '170px', '150px', '190px']
                    : ['170px', '170px', '150px', '150px']
                }
                overflow="hidden"
                borderRadius="lg"
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                position="relative"
                boxShadow="md"
                _hover={{
                  transform: 'scale(1.02)', // ✅ zoom a little
                  transition: 'transform 0.3s ease',
                }}
                transition="all 0.4s ease" // ✅ smooth resize transition
              >
                <Image
                  src={img.secondImage || '/secondPage.jpg'}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'opacity 0.6s ease-in-out', // ✅ fade in
                    opacity: 1,
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Box>
            );
          })}
        </SimpleGrid>

        {/* Description and Navigation */}
        <Flex
          justify="space-between"
          w="100%"
          flexDir={['column-reverse', 'row']}
        >
          <Text maxW="lg" fontSize="sm" color="gray.600">
            At Menta, we're redefining mental health support. Combining
            cutting-edge technology with compassionate care, we make therapy
            approachable, personalized, and stigma-free. Whether you're seeking
            support for yourself or your community, Menta is here to guide you
            toward mental wellness.
          </Text>

          <Flex gap={3} mb={[3, 0]}>
            <Button
              onClick={previous}
              borderWidth={1}
              bg="gray.300"
              borderRadius="full"
              aria-label="Previous Slide"
            >
              <ArrowBackIcon />
            </Button>
            <Button
              onClick={next}
              variant="outline"
              bg="gray.300"
              borderRadius="full"
              aria-label="Next Slide"
            >
              <ArrowForwardIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
