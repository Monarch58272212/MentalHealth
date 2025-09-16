'use client';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { NavigationLinks } from './types/types';
import Link from 'next/link';

interface Links {
  links: NavigationLinks[];
  children: React.ReactNode;
}

export default function NavigationMenu({ links, children }: Links) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant={'ghost'} onClick={onOpen}>
        {children}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody pt={10}>
            <Flex gap={30} display={['flex']} flexDir={'column'}>
              {links.map((link, index) => (
                <Flex key={index}>
                  <Link href={link.href}>
                    <Text fontSize="sm">{link.name}</Text>
                  </Link>
                </Flex>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button fontSize={'sm'} gap={2} size="sm" borderRadius={'full'}>
              Contact Us
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
