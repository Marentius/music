import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface LyricsProps {
  lyrics: string;
}

const Lyrics: React.FC<LyricsProps> = ({ lyrics }) => {
  return (
    <Box
      bg="rgba(0, 0, 0, 0.9)"
      p={4}
      rounded="lg"
      shadow="lg"
      mt={4}
      width={{ base: "100%", md: "60%" }} // Responsiv bredde
      mx="auto" // Sentrer boksen på skjermen
      wordBreak="break-word" // Bryt ord hvis nødvendig
      whiteSpace="pre-wrap" // Beholder linjeskift
    >
      <Text color="white">{lyrics}</Text>
    </Box>
  );
};

export default Lyrics;
