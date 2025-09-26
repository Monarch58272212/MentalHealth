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

  //handle add
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

  //handle read
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

  //handle delete
  const handleDelete = async (id: string) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this item?',
    );
    if (!confirm) return;
    try {
      setLoading(true);
      const res = await fetch(`/api/secondPage/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setData(data.filter((item) => item.id !== id));
        toast({
          title: 'Deleted',
          description: 'Data successfully deleted.',
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    } finally {
      setLoading(false);
    }
  };

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
      gap={3}
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

      <Box
        width="95%"
        sx={{
          columnCount: [1, 2, 3, 4],
        }}
        gap={5}
      >
        {data.map((item) => (
          <Flex
            key={item.id}
            sx={{ breakInside: 'avoid', mb: 4 }}
            p={2}
            gap={2}
            borderRadius={'md'}
            display={'flex'}
            flexDir={'column'}
            borderWidth={1}
            boxShadow={'sm'}
          >
            <Image
              src={item.secondImage}
              alt="Banner"
              width={400}
              height={300}
              style={{
                objectFit: 'contain',
                borderRadius: '0.5rem',
              }}
            />
            <Flex gap={3} justify={'flex-end'}>
              <Button colorScheme="green">Edit</Button>
              <Button
                colorScheme="red"
                onClick={() => handleDelete(item.id)}
                isLoading={loading}
              >
                Delete
              </Button>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
