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
  Image,
  SimpleGrid,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
interface PageProps {
  id: string;
  secondImage: string;
  description: string;
}
export default function SecondPage() {
  console.log(`2nd rendered`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState<PageProps[]>([]);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/secondPage');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // first load

    const interval = setInterval(() => {
      fetchData(); // auto refresh every 5s
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((next) => (next === data.length - 1 ? 0 : next + 1));
    }, 4000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [data.length]);

  const next = () => {
    console.log(`next function is renddered`);
    setCurrentIndex((n) => (n === data.length - 1 ? 0 : n + 1));
  };
  const previous = () => {
    console.log(`next function is renddered`);
    setCurrentIndex((p) => (p === 0 ? data.length - 1 : p - 1));
  };

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
      <Flex
        maxW={['300px']}
        borderRadius="lg"
        position={'relative'}
        boxShadow="lg"
        flexDir={'column'}
      >
        <Image
          src="/secondPage.jpg"
          alt="Banner"
          style={{
            objectFit: 'contain',
            borderRadius: '0.5rem',
          }}
        />
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
          <Text fontSize={['xs', 'md', 'md']}>Have a Questions?</Text>

          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
          <ExternalLinkIcon />
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

        <SimpleGrid spacing={[0, 1, 2, 2]} columns={[1, 2, 3, 4]}>
          {data.map((img, index) => (
            <Box
              m={'auto'}
              key={index}
              w="100%"
              h={
                currentIndex === index
                  ? ['90%', '150px', '150px', '190px']
                  : ['90%', '150px', '150px', '150px']
              }
              overflow="hidden"
              borderRadius="lg"
              bg="rgba(255, 255, 255, 0.1)" // transparent white for glass effect
              backdropFilter="blur(10px)" // blur background behind box
              border="1px solid rgba(255, 255, 255, 0.2)"
              position="relative"
              boxShadow="md"
            >
              <Image
                src={img.secondImage}
                alt={`Slide ${index + 1}`}
                w="100%"
                h="100%"
                objectFit="cover"
                borderRadius="lg"
                transition="all 0.4s ease-in-out"
                style={{
                  filter: currentIndex === index ? 'none' : 'blur(4px)',
                  transform:
                    currentIndex === index ? 'scale(1)' : 'scale(1.05)',
                }}
              />
            </Box>
          ))}
        </SimpleGrid>

        <Flex
          justify={'space-between'}
          w={'100%'}
          flexDir={['column-reverse', 'row', 'row']}
        >
          <Text maxW={'lg'} fontSize={'sm'} color={'gray.600'}>
            At Menta, we're redefining mental health support. Combining
            cutting-edge technology with compassionate care, we make therapy
            approachable, personalized, and stigma- free. Whether you're seeking
            support for yourself or your community, Menta is here to guide you
            toward mental wellness.
          </Text>
          <Flex gap={3}>
            <Button
              onClick={previous}
              borderWidth={1}
              bg="gray.300"
              borderRadius={'full'}
            >
              <ArrowBackIcon />
            </Button>
            <Button
              onClick={next}
              variant={'outline'}
              bg="gray.300"
              borderRadius={'full'}
            >
              <ArrowForwardIcon />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
