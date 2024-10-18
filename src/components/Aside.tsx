import React from "react";
import {
  Box,
  Text,
  Image,
  BoxProps,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Bruk Link fra react-router for å navigere mellom sider

interface AsideProps extends BoxProps {
  artistInfo: string;
  artistImageSrc: string;
  linkText?: string; // Gjør linkText valgfritt
  linkUrl?: string; // Gjør linkUrl valgfritt
}

const Aside: React.FC<AsideProps> = ({
  artistInfo,
  artistImageSrc,
  linkText,
  linkUrl,
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
      <Text mt={4}>{artistInfo}</Text>

      {/* Hvis linkText og linkUrl er gitt, vis linken */}
      {linkText && linkUrl && (
        <ChakraLink
          as={RouterLink} // Bruk Link fra react-router for intern navigasjon
          to={linkUrl}
          color="teal.300"
          mt={4}
          display="block"
          _hover={{ textDecoration: "underline" }}
        >
          {linkText}
        </ChakraLink>
      )}
    </Box>
  );
};

export default Aside;
