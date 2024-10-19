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
import Footer from "./Footer"; // Importer Footer

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
      direction="column"
      minHeight="100vh" // Sørger for at siden dekker hele høyden på vinduet
      bg="rgba(0, 0, 0, 0.0)"
      color="white"
    >
      {/* Innhold */}
      <Flex flex="1" direction={{ base: "column", md: "row" }} mb={8} p={8}>
        {/* Vis Aside på toppen på mobil, på venstre side på desktop */}
        {asidePosition === "side" && (
          <Aside
            artistInfo="Marentius er en tulleartist fra Sarpsborg, som har det gøy med å lage KI-genererte sanger med Suno AI."
            artistImageSrc="/portrait.png"
            my={{ base: 8, md: 0 }} // Margin på toppen og bunnen på mobil
          />
        )}

        <Box flex="1" mx={6}>
          {/* Header */}
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            mb={8}
            textAlign="center"
          >
            Spilleliste
          </Text>

          {/* Song List */}
          <Flex direction="column" gap={6}>
            {songs.map((song) => (
              <Link to={`/song/${song.id}`} key={song.id}>
                <Box
                  bg="rgba(0, 0, 0, 0.9)"
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
                    mr={{ md: 4 }} // Legger til margin-right på desktop
                    mb={{ base: 4, md: 0 }} // Legger til margin-bottom på mobil
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
          <Aside
            artistInfo="Alt du ser på denne nettsiden er KI generert. Det inkluderer bilder, sanger, kode, og til og med denne teksten. Trykk på linken under for å se en samling over alle verktøy som er brukt i prosessen av å lage denne nettsiden."
            artistImageSrc="/assistant.png"
            linkText="Se verktøyene som ble brukt"
            linkUrl="/tools"
            my={{ base: 8, md: 0 }}
          />
        )}

        {/* Flytt aside til bunnen på mobil */}
        {asidePosition === "bottom" && (
          <>
            <Aside
              artistInfo="Marentius er en tulleartist fra Sarpsborg, som har det gøy med å lage KI-genererte sanger med Suno AI."
              artistImageSrc="/portrait.png"
              my={8}
            />
            <Aside
              artistInfo="Alt du ser på denne nettsiden er KI generert. Det inkluderer bilder, sanger, kode, og til og med denne teksten. Trykk på linken under for å se en samling over alle verktøy som er brukt i prosessen av å lage denne nettsiden."
              artistImageSrc="/assistant.png"
              linkText="Se verktøyene som ble brukt"
              linkUrl="/tools"
              my={8}
            />
          </>
        )}
      </Flex>
      {/* Footer */}
      <Footer /> {/* Legg til Footer her */}
    </Flex>
  );
};

export default SongList;
