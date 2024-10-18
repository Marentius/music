import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongList from "./components/SongList";
import SongPage from "./components/SongPage";
import { songs as songData } from "./songs"; // Importer sangene fra songs.ts

const App: React.FC = () => {
  const [songs, setSongs] = useState(songData); // Sett initielt songs til imported songs data

  // Simulerer async lasting hvis du fortsatt ønsker effekten
  useEffect(() => {
    setTimeout(() => {
      setSongs(songData); // Oppdater songs når komponenten mountes
    }, 500); // Simulert delay, kan fjernes
  }, []);

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
        <Route path="/song/:id" element={<SongPage songs={songs} />} />
      </Routes>
    </Router>
  );
};

export default App;
