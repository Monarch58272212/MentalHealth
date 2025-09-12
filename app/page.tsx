'use client';

import { Flex } from '@chakra-ui/react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

export default function Home() {
  const images = [
    {
      Imageurl:
        'https://images.unsplash.com/photo-1475823678248-624fc6f85785?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      Imageurl:
        'https://images.unsplash.com/photo-1447767819330-4adf93b62dfe?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      Imageurl:
        'https://images.unsplash.com/photo-1601504208348-b36edb1872aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      Imageurl:
        'https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <Flex flexDir={'column'} justify={'center'} align={'center'} bg="gray.100">
      <FirstPage />
      <SecondPage images={images} />
    </Flex>
  );
}
