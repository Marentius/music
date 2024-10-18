import React from "react";
import { Box, Text, Image, BoxProps } from "@chakra-ui/react";

interface AsideProps extends BoxProps {
  artistInfo: string;
  artistImageSrc: string;
}

const Aside: React.FC<AsideProps> = ({
  artistInfo,
  artistImageSrc,
  ...props
}) => {
  return (
    <Box
      bg="rgba(0, 0, 0, 0.9)"
      color="white"
      p={6}
      rounded="lg"
      shadow="lg"
      textAlign="center"
      w={{ base: "100%", md: "250px" }}
      my={{ base: 4, md: 0 }} // Margin på toppen og bunnen for mobil
      {...props}
    >
      <Image
        src={artistImageSrc}
        alt="Artist"
        borderRadius="full"
        boxSize="150px"
        objectFit="cover" // Sørger for at bildet beholder sine proporsjoner
        mb={4}
        mx="auto" // Sentrer bildet horisontalt
      />
      <Text fontSize="lg" fontWeight="bold">
        Marentius
      </Text>{" "}
      {/* La til navn her */}
      <Text mt={4}>{artistInfo}</Text>
    </Box>
  );
};

export default Aside;
