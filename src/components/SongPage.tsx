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
  styleOfMusic: string; // Ny egenskap for musikksjangeren
}

interface SongPageProps {
  songs: Song[];
  onPlaySong: (song: Song) => void; // Funksjon for å spille av en sang
}

const SongPage: React.FC<SongPageProps> = ({ songs, onPlaySong }) => {
  const songId = window.location.pathname.split("/").pop();
  const song = songs[parseInt(songId || "0")];

  return song ? (
    <>
      <Box p={6} bg="gray.900" color="white" minHeight="100vh">
        <Flex justify="center" align="center">
          {/* Album Art */}
          <Image
            src={song.imageSrc}
            alt={song.title}
            boxSize="300px"
            objectFit="cover"
            rounded="lg"
            mr={8}
          />
          <Box>
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

            {/* Play-knapp */}
            <Flex mt={6} align="center">
              <IconButton
                icon={<FaPlay />}
                aria-label="Play"
                colorScheme="green"
                mr={2}
                onClick={() => onPlaySong(song)}
              />
              <Text fontSize="sm">Now playing</Text>
            </Flex>
          </Box>
        </Flex>

        {/* Musikkspiller og lyrics */}
        <Box mt={8}>
          <MusicPlayer audioSrc={song.audioSrc} />
          <Lyrics lyrics={song.lyrics} />
        </Box>
      </Box>
    </>
  ) : (
    <Text>Song not found!</Text>
  );
};

export default SongPage;
