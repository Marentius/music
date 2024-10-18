import React from "react";
import { Box, Image, Text, Grid, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Song {
  title: string;
  artist: string;
  album: string;
  id: number;
  imageSrc: string; // Legger til imageSrc
}

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <Box p={8} bg="gray.900" color="white">
      {/* Header */}
      <Flex justify="space-between" align="center" mb={8}>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Popular Songs
        </Text>
        <Flex>
          {/* Categories Section */}
          <Button
            size="md"
            variant="outline"
            colorScheme="teal"
            mr={2}
            rounded="full"
          >
            All
          </Button>
          <Button
            size="md"
            variant="outline"
            colorScheme="teal"
            mr={2}
            rounded="full"
          >
            Relax
          </Button>
          <Button
            size="md"
            variant="outline"
            colorScheme="teal"
            mr={2}
            rounded="full"
          >
            Party
          </Button>
          <Button size="md" variant="outline" colorScheme="teal" rounded="full">
            Jazz
          </Button>
        </Flex>
      </Flex>

      {/* Song List */}
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {songs.map((song) => (
          <Link to={`/song/${song.id}`} key={song.id}>
            <Box
              bg="gray.800"
              rounded="lg"
              shadow="lg"
              overflow="hidden"
              _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
              position="relative"
            >
              {/* Album Art */}
              <Image
                src={song.imageSrc} // Bruker imageSrc her
                alt={song.title}
                objectFit="cover"
                w="100%"
                h="200px"
                roundedTop="lg"
              />

              {/* Overlay for the play button (optional) */}
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                opacity="0"
                transition="opacity 0.3s ease"
                _hover={{ opacity: "1" }}
              >
                <Button colorScheme="teal" rounded="full" size="lg">
                  ▶
                </Button>
              </Box>

              {/* Song Info */}
              <Box p={4} textAlign="center">
                <Text fontSize="lg" fontWeight="bold" color="white">
                  {song.title}
                </Text>
                <Text fontSize="sm" color="gray.400">
                  {song.artist}
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default SongList;
