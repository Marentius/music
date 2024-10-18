import React, { useState, useRef } from "react";
import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  Flex,
  Text,
} from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

interface MusicPlayerProps {
  audioSrc: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false); // For å spore om musikken spiller
  const [currentTime, setCurrentTime] = useState(0); // Spore nåværende tid
  const [duration, setDuration] = useState(0); // Spore musikkens varighet
  const audioRef = useRef<HTMLAudioElement | null>(null); // Referanse til audio-elementet

  // Play/Pause musikken
  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  // Oppdater slideren og tid når musikken spiller
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Håndtere endring på slideren for å hoppe til ny posisjon i musikken
  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  // Når lyden er lastet inn, oppdater varighet
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Formatere tid til mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
  };

  return (
    <Box bg="gray.800" p={4} rounded="lg" shadow="lg" mt={8}>
      {/* Audio elementet */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        Your browser does not support the audio element.
      </audio>

      {/* Slider for å hoppe i musikken */}
      <Box mt={4}>
        <Slider
          aria-label="slider-ex-1"
          value={currentTime}
          min={0}
          max={duration}
          onChange={handleSliderChange}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>

        {/* Viser nåværende tid og total varighet */}
        <Flex justify="space-between" mt={2}>
          <Text color="white">{formatTime(currentTime)}</Text>
          <Text color="white">{formatTime(duration)}</Text>
        </Flex>
      </Box>

      {/* Play/Pause knapper */}
      <Flex justify="center" mt={4}>
        <IconButton
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          aria-label={isPlaying ? "Pause" : "Play"}
          colorScheme="teal"
          rounded="full"
          onClick={togglePlayPause} // Play/Pause funksjon
        />
      </Flex>
    </Box>
  );
};

export default MusicPlayer;
