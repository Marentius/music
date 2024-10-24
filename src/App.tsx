import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongList from "./components/SongList";
import SongPage from "./components/SongPage";
import MusicPlayer from "./components/MusicPlayer"; // Importer MusicPlayer
import NavBar from "./components/NavBar"; // Importer NavBar
import ToolsList from "./components/ToolList"; // Importer ToolsList
import ToolDetails from "./components/ToolDetails"; // Importer ToolDetails
import ScrollToTop from "./components/ScrollTop"; // Importer ScrollToTop
import { songs as songData, Song } from "./songs"; // Importer sangene og Song-typen fra songs.ts
import { Box } from "@chakra-ui/react";
import { tools } from "./tools"; // Importer verktøyene

const App: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>(songData); // Sett initielt songs til imported songs data
  const [currentSong, setCurrentSong] = useState<Song | null>(null); // Definer currentSong-typen som Song eller null

  // Simulerer async lasting hvis du fortsatt ønsker effekten
  useEffect(() => {
    setTimeout(() => {
      setSongs(songData); // Oppdater songs når komponenten mountes
    }, 500); // Simulert delay, kan fjernes
  }, []);

  // Funksjon for å håndtere avspilling av sang
  const handlePlaySong = (song: Song) => {
    setCurrentSong(song); // Sett den valgte sangen som den aktive sangen
  };

  return (
    <Box
      bgImage="/background.png"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
    >
      <Router>
        {/* Inkluder ScrollToTop for å scrolle til toppen ved rutenavigasjon */}
        <ScrollToTop />

        {/* Inkluder NavBar på alle sider */}
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <SongList
                songs={songs.map((song, index) => ({ ...song, id: index }))} // Legger til en unik id basert på indeksen
              />
            }
          />
          <Route
            path="/song/:id"
            element={
              <>
                <SongPage
                  songs={songs}
                  onPlaySong={handlePlaySong} // Funksjon for å spille av sang
                />
                {currentSong && <MusicPlayer audioSrc={currentSong.audioSrc} />}{" "}
                {/* Musikkspilleren */}
              </>
            }
          />
          {/* Legg til en ny rute for ToolsList */}
          <Route path="/tools" element={<ToolsList />} />

          {/* Legg til en ny rute for ToolDetails */}
          <Route path="/tools/:id" element={<ToolDetails tools={tools} />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
