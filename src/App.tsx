import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongList from "./components/SongList";
import SongPage from "./components/SongPage";
import MusicPlayer from "./components/MusicPlayer"; // Importer MusicPlayer
import { songs as songData, Song } from "./songs"; // Importer sangene og Song-typen fra songs.ts

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
    <Router>
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
      </Routes>
    </Router>
  );
};

export default App;
