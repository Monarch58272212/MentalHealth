'use client';
import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerIcon, PhoneIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
const NavigationMenu = dynamic(() => import('./NavigationMenu'), {
  ssr: false,
});

export default function Navigation() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Features & Benefits', href: '#features' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <Flex
      w="100%"
      justify={[
        'space-between',
        'space-between',
        'space-between',
        'space-around',
      ]}
      align="center"
      m="auto"
      position="fixed"
      top={0}
      zIndex={1000}
      p={[3, 4, 3]}
      backdropFilter="blur(5px)"
      color={'white'}
    >
      <Flex>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={90} height={90} priority />
        </Link>
      </Flex>

      <Flex gap={30} display={['none', 'none', 'none', 'flex']}>
        {links.map((link, index) => (
          <Flex key={index}>
            <Link href={link.href}>
              <Text fontSize="sm">{link.name}</Text>
            </Link>
          </Flex>
        ))}
      </Flex>

      <Flex display={['none', 'none', 'none', 'flex']} gap={3} align={'center'}>
        <Button fontSize={'sm'} gap={2} size="sm" borderRadius={'full'}>
          Contact Us
        </Button>
      </Flex>

      <Flex display={['flex', 'flex', 'flex', 'none']}>
        <NavigationMenu links={links}>
          <HamburgerIcon />
        </NavigationMenu>
      </Flex>
    </Flex>
  );
}
