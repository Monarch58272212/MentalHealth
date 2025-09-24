'use client';

import { Flex } from '@chakra-ui/react';
import FirstPage from './components/FirstPage';
import { ArrowForwardIcon } from '@chakra-ui/icons';
const ThirdPage = dynamic(() => import('./components/ThirdPage'), {
  loading: () => <ExpertsSkeleton />,
  ssr: false,
});
import ForthPage from './components/ForthPage';
const FifthPage = dynamic(() => import('./components/FifthPage'), {
  loading: () => <ExpertsSkeleton />,
  ssr: false,
});

import SixthPage from './components/SixthPage';
import { SiGnuprivacyguard } from 'react-icons/si';
import { GrConnect } from 'react-icons/gr';
import { TbWorldShare } from 'react-icons/tb';
import SeventhPage from './components/SeventhPage';
import EighthPage from './components/EighthPage';
import SecondPage from './components/SecondPage';
import UseImperativeHandle from './components/Hooks/UseImperativeHandle';
import ExpertsSkeleton from './components/ui/FifthSkeleton';
import { lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ThirdSkeleton from './components/ui/ThirdSkeleton';

export default function Home() {
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
      avatar:
        'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Monarch',
      custumer: 'Patient',
      message:
        'Menta has completely transformed how I approach mental health. Its user-friendly, highly intuitive, and provides genuine support that feels personal and effective. I truly recommend it to anyone seeking growth.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8fDA%3D',
      name: 'Christine',
      custumer: 'Patient',
      message:
        'Therapy used to feel intimidating, but Menta made it feel natural. I now look forward to every session.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
      name: 'Bacalso',
      custumer: 'Patient',
      message:
        'Menta is more than just a tool — it’s a companion in my healing journey.',
    },
    {
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8fDA%3D',
      name: 'Reyno',
      custumer: 'Patient',
      message:
        'I was hesitant at first, but Menta showed me that taking care of my mental health can be empowering.',
    },
    {
      avatar:
        'https://plus.unsplash.com/premium_photo-1671656333460-793292581bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2V8ZW58MHx8MHx8fDA%3D',
      name: 'Melody',
      custumer: 'Patient',
      message:
        'Thanks to Menta, I’ve learned to manage stress better and feel more in control of my emotions.',
    },
  ];

  const fifthPageImage = [
    {
      images:
        'https://plus.unsplash.com/premium_photo-1661583648651-e00d6358037f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
      name: 'Michael Nguyen, M.S.W.',
      position: 'Licensed Clinical Social Worker',
      icon: <ArrowForwardIcon />,
    },
    {
      images:
        'https://images.unsplash.com/photo-1726806387153-986d667d66fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHdpdGglMjBnbGFzc2V8ZW58MHx8MHx8fDA%3D',
      name: 'Michael Nguyen, M.S.W.',
      position: 'Licensed Clinical Social Worker',
      icon: <ArrowForwardIcon />,
    },
    {
      images:
        'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHdpdGglMjBnbGFzc2V8ZW58MHx8MHx8fDA%3D',
      name: 'Michael Nguyen, M.S.W.',
      position: 'Licensed Clinical Social Worker',
      icon: <ArrowForwardIcon />,
    },
  ];

  const sixthPageImage = [
    {
      title: 'Sign Up',
      icon: <SiGnuprivacyguard />,
      description: 'Create your account and set up your profile.',
    },
    {
      title: 'Connect',
      icon: <GrConnect />,
      description: 'Get matched with a therapist or explore our resources.',
    },
    {
      title: 'Thrive',
      icon: <TbWorldShare />,
      description: 'Begin your journey toward mental wellness.',
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
      {/*    <UseImperativeHandle />*/}
      <FirstPage />
      <SecondPage />
      <ThirdPage thirdPageImage={thirdPageImage} />
      <ForthPage forthPageImage={forthPageImage} />
      <FifthPage fifthPageImage={fifthPageImage} />
      <SixthPage sixthPageImage={sixthPageImage} />
      <SeventhPage />
      <EighthPage />
    </Flex>
  );
}
