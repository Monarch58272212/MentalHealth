'use client';

import { useEffect, useState } from 'react';
import {
  Button,
  Flex,
  Input,
  useToast,
  Textarea,
  Text,
  Box,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

interface ThirdData {
  id: number;
  thirdImage: string;
  title: string;
  description: string;
}

export default function Page() {
  const [data, setData] = useState<ThirdData[]>([]);
  const [thirdImage, setThirdImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  // ✅ Fetch all data
  const fetchAllData = async () => {
    try {
      const res = await fetch('/api/thirdPage');
      if (!res.ok) {
        toast({
          title: 'aw mali ka dire gaw',
          description: 'aw oo jud gaw naa kay mali sa pag fetch nimo',
          status: 'error',
          isClosable: true,
          duration: 3000,
        });
        return;
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.log(`agoy ka mali jud kas 3rd frontend ${error}`);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [toast]);

  // ✅ Add new third data
  const handleThirdAdd = async () => {
    if (!thirdImage.trim() || !title.trim() || !description.trim()) {
      return toast({
        title: 'atay ka gaw butangi tanan',
        description: 'mali gaw',
        status: 'error',
        isClosable: true,
        duration: 3000,
      });
    }
    try {
      setLoading(true);
      const req = await fetch('/api/thirdPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: Date.now().toString(),
          thirdImage,
          title,
          description,
        }),
      });

      const result = await req.json();

      // ✅ Refresh list after adding
      await fetchAllData();

      setDescription('');
      setThirdImage('');
      setTitle('');
      toast({
        title: 'aw ka goods nimo gaw oi',
        description: 'ay wow na wow',
        status: 'success',
        isClosable: true,
        duration: 3000,
      });
    } catch (error) {
      console.log(`mali sa frontend sa third dire gaw ${error}`);
      toast({
        title: 'error dire dapit dol sa frontend third',
        description: 'hays mali ka dire dol oii',
        status: 'error',
        isClosable: true,
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex w={'100%'} justify={'center'} align={'center'} flexDir={'column'}>
      <Flex pos={'fixed'} top={2} left={2}>
        <Link href={`/2ndCreate`}>
          <Button size={'xs'}>Back to Second</Button>
        </Link>
      </Flex>
      {/* ✅ Input Form */}
      <Flex
        p={5}
        w={['xs', 'sm', 'md', 'lg']}
        gap={3}
        borderWidth={1}
        justify={'center'}
        align={'center'}
        flexDir={'column'}
      >
        <Input
          placeholder="Third Image URL"
          value={thirdImage}
          onChange={(e) => setThirdImage(e.target.value)}
        />
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          rows={4}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          isLoading={loading}
          colorScheme="green"
          onClick={handleThirdAdd}
        >
          Add Data in 3rd Image
        </Button>
      </Flex>

      {/* ✅ Output List */}
      <Box
        width="90%"
        mt={10}
        sx={{
          columnCount: [1, 2, 3, 4],
        }}
        gap={5}
      >
        {data.map((e) => (
          <Flex
            key={e.id}
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
              src={e.thirdImage}
              alt={e.title}
              width={400}
              height={300}
              style={{
                objectFit: 'contain',
                borderRadius: '0.5rem',
              }}
            />
            <Text fontWeight={'bold'}>{e.title}</Text>
            <Text fontSize={'sm'} color={'gray.500'}>
              {e.description}
            </Text>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
}
