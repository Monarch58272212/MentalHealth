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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ArrowBackIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';

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

  const [isOpen2nd, setIsOpen2nd] = useState(false);

  const handleOpen2nd = (isOpen: boolean) => {
    setIsOpen2nd(isOpen);
  };

  //for edit modal
  const [isOpen, setIsOpen] = useState(false);
  const [editImageurl, setEditImageurl] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editId, setEditId] = useState('');

  const handleOpenModal = (pageData: PageProps) => {
    setEditId(pageData.id);
    setEditImageurl(pageData.secondImage);
    setEditDescription(pageData.description);
    setIsOpen(true);
  };

  //handle update
  const handleUpdate = async () => {
    try {
      setLoading(true);

      const req = await fetch(`/api/secondPage/${editId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secondImage: editImageurl,
          description: editDescription,
        }),
      });

      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }

      setData(
        data.map((item) =>
          item.id === editId
            ? {
                ...item,
                secondImage: editImageurl,
                description: editDescription,
              }
            : item,
        ),
      );
      setEditId('');
      setEditImageurl('');
      setEditDescription('');
      setIsOpen(false);

      toast({
        title: 'Success',
        description: 'Data successfully updated.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating data:', error);
      toast({
        title: 'Error',
        description: 'There was an error updating the data.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

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
    <Flex flexDir={'row'} mt={20} w={'100%'}>
      <Flex p={2} flexDir={'column'} bg={'gray.100'}>
        <Button gap={2} onClick={() => handleOpen2nd(true)}>
          <EditIcon color={'green.500'} boxSize={[3, 4, 5]} />
          <Text
            fontSize={'xs'}
            color={'gray.500'}
            display={['none', 'none', 'block']}
          >
            2nd
          </Text>
        </Button>
      </Flex>
      <Flex
        minH="100vh"
        align="center"
        flexDir={'column'}
        justify="flex-start"
        bg="gray.50"
        px={4}
        w={'100%'}
        borderWidth={2}
        gap={3}
      >
        <Modal
          isOpen={isOpen2nd}
          onClose={() => setIsOpen2nd(false)}
          size="lg"
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <Input
                  placeholder="Second Image URL"
                  value={imageurl}
                  onChange={(e) => setImageurl(e.target.value)}
                />
                <Textarea
                  rows={4}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={handleAdd}
                isLoading={loading}
                colorScheme="blue"
                mr={3}
              >
                Add
              </Button>
              <Button onClick={() => setIsOpen2nd(false)} variant="ghost">
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Box
          width="90%"
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
              <Text fontSize={'sm'} color={'gray.500'}>
                {item.description}
              </Text>

              <Flex gap={3} justify={'flex-end'}>
                <Button variant={'ghost'} onClick={() => handleOpenModal(item)}>
                  <EditIcon color={'blue.500'} boxSize={[3, 4, 5]} />
                </Button>
                <Button
                  variant={'ghost'}
                  onClick={() => handleDelete(item.id)}
                  isLoading={loading}
                >
                  <DeleteIcon color={'red.500'} boxSize={[3, 4, 5]} />
                </Button>
              </Flex>
            </Flex>
          ))}
        </Box>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Second Page Data</ModalHeader>
            <ModalCloseButton />
            <ModalBody display={'flex'} flexDir={'column'} gap={3}>
              <Input
                placeholder="Second Image URL"
                value={editImageurl}
                onChange={(e) => setEditImageurl(e.target.value)}
              />
              <Textarea
                rows={4}
                placeholder="Description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="green"
                onClick={handleUpdate}
                isLoading={loading}
              >
                Update
              </Button>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
