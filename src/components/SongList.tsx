import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Aside from "./Aside";

interface Song {
  title: string;
  artist: string;
  album: string;
  id: number;
  imageSrc: string;
}

interface SongListProps {
  songs: Song[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  // Bruker media queries for å avgjøre plassering av Aside
  const asidePosition = useBreakpointValue({ base: "bottom", md: "side" });

  return (
    <Flex
      bg="gray.900"
      color="white"
      p={8}
      direction={{ base: "column", md: "row" }} // Kolonnevisning på mobil, radvisning på desktop
    >
      {/* Vis Aside på toppen på mobil, på venstre side på desktop */}
      {asidePosition === "side" && <Aside artistInfo="Marentius er kul" />}

      <Box flex="1" mx={6}>
        {/* Header */}
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="white"
          mb={8}
          textAlign="center"
        >
          Marentius' sanger
        </Text>

        {/* Song List */}
        <Flex direction="column" gap={6}>
          {songs.map((song) => (
            <Link to={`/song/${song.id}`} key={song.id}>
              <Box
                bg="gray.800"
                rounded="lg"
                shadow="lg"
                overflow="hidden"
                _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
                display="flex"
                flexDirection={{ base: "column", md: "row" }} // Kolonnevisning på mobil, radvisning på desktop
                alignItems="center"
                justifyContent="center"
                padding="20px"
                width="100%"
                mx="auto"
              >
                {/* Album Art */}
                <Image
                  src={song.imageSrc}
                  alt={song.title}
                  objectFit="cover"
                  boxSize={{ base: "150px", md: "100px" }} // Større bilder på mobil
                  rounded="lg"
                />

                {/* Song Info */}
                <Box
                  flex="1"
                  mt={{ base: 4, md: 0 }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text fontSize="xl" fontWeight="bold" color="white">
                    {song.title}
                  </Text>
                  <Text fontSize="md" color="gray.400">
                    {song.artist}
                  </Text>
                </Box>

                {/* Play Button */}
                <Button
                  colorScheme="teal"
                  size="lg"
                  rounded="full"
                  mt={{ base: 4, md: 0 }}
                >
                  ▶
                </Button>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>

      {/* Vis Aside i bunn på mobil, på høyre side på desktop */}
      {asidePosition === "side" && (
        <Aside artistInfo="More details about the artist and their career." />
      )}

      {/* Flytt aside til bunnen på mobil */}
      {asidePosition === "bottom" && (
        <>
          <Aside artistInfo="Some interesting facts about Marentius." />
          <Aside artistInfo="More details about the artist and their career." />
        </>
      )}
    </Flex>
  );
};

export default SongList;
