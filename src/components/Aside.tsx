import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface AsideProps {
  artistInfo: string;
}

const Aside: React.FC<AsideProps> = ({ artistInfo }) => {
  return (
    <Box
      bg="gray.800"
      color="white"
      p={6}
      rounded="lg"
      shadow="lg"
      textAlign="center"
      w={{ base: "100%", md: "250px" }} // Full bredde på mobil, 250px på desktop
      mb={{ base: 4, md: 0 }} // Margin bottom på mobil
    >
      <Text fontSize="lg" fontWeight="bold">
        Marentius
      </Text>
      <Text mt={4}>{artistInfo}</Text>
    </Box>
  );
};

export default Aside;
