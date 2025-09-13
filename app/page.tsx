'use client';

import { Avatar, Flex } from '@chakra-ui/react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import ForthPage from './components/ForthPage';

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

  const thirdPageImage = [
    {
      title: 'Personalized Therapy',
      icon: <ArrowForwardIcon />,
      photo:
        'https://images.unsplash.com/photo-1711602926021-db8bce24843a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBlYWNlJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
      content: 'Tailored sessions that fit your unique needs and lifestyle.',
    },
    {
      title: 'Personalized Therapy',
      icon: <ArrowForwardIcon />,
      photo:
        'https://images.unsplash.com/photo-1512311734173-51a49c854e78?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      content: 'Tailored sessions that fit your unique needs and lifestyle.',
    },
    {
      title: 'Personalized Therapy',
      icon: <ArrowForwardIcon />,
      photo:
        'https://plus.unsplash.com/premium_photo-1664299544361-e8cd175e4586?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlYWNlJTIwY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
      content: 'Tailored sessions that fit your unique needs and lifestyle.',
    },
    {
      title: 'Personalized Therapy',
      icon: <ArrowForwardIcon />,
      photo:
        'https://plus.unsplash.com/premium_photo-1661378588564-55810e18f29f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVhY2UlMjBjYXJlfGVufDB8fDB8fHww',
      content: 'Tailored sessions that fit your unique needs and lifestyle.',
    },
  ];

  const forthPageImage = [
    {
      avatar: 'https://bit.ly/kent-c-dodds',
      name: 'Monarch',
      custumer: 'Patient',
      message:
        'Menta has completely transformed how I approach mental health. Its user-friendly, highly intuitive, and provides genuine support that feels personal and effective. I truly recommend it to anyone seeking growth.',
    },
    {
      avatar: 'https://bit.ly/kent-c-dodds',
      name: 'Christine',
      custumer: 'Patient',
      message:
        'Therapy used to feel intimidating, but Menta made it feel natural. I now look forward to every session.',
    },
    {
      avatar: 'https://bit.ly/kent-c-dodds',
      name: 'Bacalso',
      custumer: 'Patient',
      message:
        'Menta is more than just a tool — it’s a companion in my healing journey.',
    },
    {
      avatar: 'https://bit.ly/kent-c-dodds',
      name: 'Reyno',
      custumer: 'Patient',
      message:
        'I was hesitant at first, but Menta showed me that taking care of my mental health can be empowering.',
    },
    {
      avatar: 'https://bit.ly/kent-c-dodds',
      name: 'Melody',
      custumer: 'Patient',
      message:
        'Thanks to Menta, I’ve learned to manage stress better and feel more in control of my emotions.',
    },
  ];

  return (
    <Flex
      flexDir={'column'}
      w={'100%'}
      justify={'center'}
      align={'center'}
      bg="gray.100"
    >
      <FirstPage />
      <SecondPage images={images} />
      <ThirdPage thirdPageImage={thirdPageImage} />
      {/*<ForthPage forthPageImage={forthPageImage} /> */}
    </Flex>
  );
}
