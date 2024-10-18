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
      <Box
        p={6}
        bg="rgba(0, 0, 0, 0.3)"
        color="white"
        minHeight="100vh"
        pb="120px"
      >
        <Flex justify="center" align="center" mb={8}>
          {/* Denne boksen har nå samme bredde som Lyrics-seksjonen */}
          <Box
            bg="rgba(0, 0, 0, 0.9)"
            p={6}
            borderRadius="lg"
            border="1px solid rgba(0, 0, 0, 0.9)"
            shadow="lg"
            width={{ base: "100%", md: "60%" }} // Match bredde til Lyrics-seksjonen
          >
            <Flex
              direction={{ base: "column", md: "row" }} // Responsiv retning basert på skjermstørrelse
              justify="center"
              align="center"
            >
              {/* Album Art */}
              <Image
                src={song.imageSrc}
                alt={song.title}
                boxSize={{ base: "200px", md: "300px" }} // Responsiv størrelse på bildet
                objectFit="cover"
                rounded="lg"
                mr={{ base: 8, md: 8 }} // Margin til høyre, økt på større skjermer
                mb={{ base: 4, md: 0 }} // Legg til margin på bunn på mobil
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

                {/* Play-knapp */}
                <Flex
                  mt={6}
                  align="center"
                  justify={{ base: "center", md: "flex-start" }}
                >
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
          </Box>
        </Flex>

        {/* Lyrics skal sentreres */}
        <Box mt={8} display="flex" justifyContent="center">
          <Box width={{ base: "100%", md: "60%" }}>
            <Lyrics lyrics={song.lyrics} />
          </Box>
        </Box>

        {/* Musikkspiller i bunnen */}
        <MusicPlayer audioSrc={song.audioSrc} />
      </Box>
    </>
  ) : (
    <Text>Song not found!</Text>
  );
};

export default SongPage;
