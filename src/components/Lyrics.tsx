import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface LyricsProps {
  lyrics: string;
}

const Lyrics: React.FC<LyricsProps> = ({ lyrics }) => {
  return (
    <Box bg="rgba(0, 0, 0, 0.9)" p={4} rounded="lg" shadow="lg" mt={4}>
      <Text whiteSpace="pre-wrap" color="gray.400">
        {lyrics}
      </Text>
    </Box>
  );
};

export default Lyrics;
