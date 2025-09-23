"use client";

import { useRef, useState } from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";

export default function RefCounterDemo() {
  const countRef = useRef(0); // value na hindi nagre-render
  const [display, setDisplay] = useState(0); // value para sa UI

  const incrementRef = () => {
    countRef.current += 1; // tumataas ang countRef pero hindi nagre-render
    console.log("Current countRef:", countRef.current);
  };

  const showRef = () => {
    setDisplay(countRef.current); // para makita sa UI
  };

  return (
    <VStack spacing={4} p={5} border="1px solid gray" borderRadius="md">
      <Text fontSize="xl">useRef Counter Demo</Text>
      <Text>Current Display: {display}</Text>

      <Button colorScheme="teal" onClick={incrementRef}>
        Increment useRef
      </Button>

      <Button colorScheme="orange" onClick={showRef}>
        Show useRef in UI
      </Button>
    </VStack>
  );
}
