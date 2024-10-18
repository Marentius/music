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
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

interface MusicPlayerProps {
  audioSrc: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  // Juster bredde basert på skjermstørrelse
  const sliderWidth = useBreakpointValue({ base: "50%", md: "70%", lg: "80%" });

  return (
    <Box
      bg="rgba(0, 0, 0, 0.9)"
      p={4}
      shadow="lg"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1000}
      maxHeight="80px"
    >
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Play/Pause buttons */}
      <IconButton
        icon={isPlaying ? <FaPause /> : <FaPlay />}
        aria-label={isPlaying ? "Pause" : "Play"}
        colorScheme="teal"
        onClick={togglePlayPause}
      />

      {/* Time Slider */}
      <Slider
        aria-label="music-slider"
        value={currentTime}
        max={duration}
        onChange={handleSliderChange}
        width={sliderWidth}
        mx={4}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>

      {/* Time display */}
      <Flex minWidth="100px" justify="space-between">
        <Text color="white" mr={2}>
          {formatTime(currentTime)}
        </Text>
        <Text color="white">/ {formatTime(duration)}</Text>
      </Flex>
    </Box>
  );
};

export default MusicPlayer;
