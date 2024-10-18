import React from "react";
import { Box, Text, Image, Flex, IconButton } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import MusicPlayer from "./MusicPlayer";
import Lyrics from "./Lyrics";

interface Song {
  title: string;
  artist: string;
  album: string;
  audioSrc: string;
  lyrics: string;
  imageSrc: string;
  styleOfMusic: string;
}

interface SongPageProps {
  songs: Song[];
}

const SongPage: React.FC<SongPageProps> = ({ songs }) => {
  const songId = window.location.pathname.split("/").pop();
  const song = songs[parseInt(songId || "0")];

  return song ? (
    <Box p={4} bg="gray.900" color="white" minHeight="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="center"
        align="center"
      >
        {/* Album Art */}
        <Image
          src={song.imageSrc}
          alt={song.title}
          boxSize={{ base: "200px", md: "300px" }} // Endrer størrelse for mobil
          objectFit="cover"
          rounded="lg"
          mb={{ base: 4, md: 0 }} // Legger til margin på små skjermer
          mr={{ md: 8 }} // Legger til margin høyre for mellomstore skjermer
        />
        <Box textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="3xl" fontWeight="bold">
            {song.title}
          </Text>
          <Text fontSize="xl" color="gray.400">
            {song.artist}
          </Text>
          <Text fontSize="md" color="gray.500">
            Album: {song.album}
          </Text>

          {/* Viser musikksjangeren */}
          <Text fontSize="lg" color="teal.300" mt={2}>
            Style of Music: {song.styleOfMusic}
          </Text>

          <Flex
            mt={6}
            justify={{ base: "center", md: "flex-start" }}
            align="center"
          >
            <IconButton
              icon={<FaPlay />}
              aria-label="Play"
              colorScheme="green"
              mr={2}
            />
            <Text fontSize="sm">Now playing</Text>
          </Flex>
        </Box>
      </Flex>

      <Box mt={8}>
        <MusicPlayer audioSrc={song.audioSrc} />
        <Lyrics lyrics={song.lyrics} />
      </Box>
    </Box>
  ) : (
    <Text>Song not found!</Text>
  );
};

export default SongPage;
