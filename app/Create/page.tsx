'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Heading,
  useToast,
  SimpleGrid,
} from '@chakra-ui/react';
import Image from 'next/image';

interface PageProps {
  id: string;
  secondImage: string;
  description: string;
}

export default function Page() {
  const [data, setData] = useState<PageProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [imageurl, setImageurl] = useState('');
  const [description, setDescription] = useState('');
  const toast = useToast();

  const handleAdd = async () => {
    try {
      setLoading(true);

      const req = await fetch('/api/secondPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Date.now().toString(),
          secondImage: imageurl,
          description,
        }),
      });

      const addData = await req.json();
      setData([...data, addData]);
      setImageurl('');
      setDescription('');

      toast({
        title: 'Success',
        description: 'Data successfully created.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error adding data:', error);
      toast({
        title: 'Error',
        description: 'There was an error adding the data.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/secondPage');
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <Flex
      minH="100vh"
      align="center"
      flexDir={'column'}
      justify="center"
      bg="gray.50"
      mt={20}
      px={4}
      w={'100%'}
      borderWidth={2}
    >
      <Box
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        w={{ base: '100%', sm: '400px' }}
      >
        <Heading size="md" mb={6} textAlign="center">
          Add Second Page Data
        </Heading>

        <Stack spacing={4}>
          <Input
            placeholder="Second Image URL"
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
          />
          <Input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleAdd} isLoading={loading} colorScheme="blue">
            Create
          </Button>
        </Stack>
      </Box>

      <SimpleGrid spacing={4} minChildWidth="250px" w="100%" mt={6}>
        {data.map((item) => (
          <Box
            key={item.id}
            p={4}
            borderWidth={1}
            borderRadius="md"
            w="100%"
            h="200px"
            position="relative"
          >
            {item.secondImage ? (
              <Image
                src={item.secondImage}
                alt="Second Page Image"
                fill
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            ) : (
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="8px"
              >
                <Heading size="sm" color="gray.500">
                  No Image
                </Heading>
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
