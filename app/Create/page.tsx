'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Input,
  Stack,
  Heading,
  useToast,
} from '@chakra-ui/react';

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

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" px={4}>
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
    </Flex>
  );
}
