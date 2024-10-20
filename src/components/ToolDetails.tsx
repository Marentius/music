// ToolDetails.tsx

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Text,
  Icon,
  Image,
  Flex,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { Tool } from "../tools";

interface ToolDetailsProps {
  tools: Tool[];
}

const ToolDetails: React.FC<ToolDetailsProps> = ({ tools }) => {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find((tool) => tool.id === parseInt(id || "0"));
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<{
    imageUrl: string;
    prompt: string;
    style?: string;
  } | null>(null);

  if (!tool) {
    return <Text>Verktøy ikke funnet!</Text>;
  }

  const handleImageClick = (image: {
    imageUrl: string;
    prompt: string;
    style?: string;
  }) => {
    setSelectedImage(image);
    onOpen();
  };

  return (
    <Box
      bg="rgba(0, 0, 0, 0.9)"
      p={6}
      rounded="lg"
      shadow="lg"
      color="white"
      maxWidth="1200px"
      mx="auto"
      mt={8}
    >
      {/* Tool Icon */}
      <Icon as={() => tool.icon} boxSize={12} mb={4} />

      {/* Tool Name */}
      <Text fontSize="3xl" fontWeight="bold">
        {tool.name}
      </Text>

      {/* Tool Description */}
      <Text fontSize="md" color="gray.400" mt={2}>
        {tool.description}
      </Text>

      {/* Bilder hvis det finnes */}
      {tool.images && (
        <Box mt={6}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Genererte bilder:
          </Text>
          <SimpleGrid columns={1} spacing={6}>
            {tool.images.map((image, index) => (
              <Flex
                key={index}
                align="start"
                gap={4}
                cursor="pointer"
                direction={{ base: "column", md: "row" }} // Kolonne på mobil, rad på større skjermer
                onClick={() => handleImageClick(image)}
              >
                {/* Bildeseksjon */}
                <Image
                  src={image.imageUrl}
                  alt={`Generated image ${index + 1}`}
                  borderRadius="lg"
                  shadow="md"
                  maxW={{ base: "100%", md: "50%" }} // Begrens bredde for bildet
                />

                {/* Prompt tekstseksjon */}
                <Box bg="gray.800" p={4} borderRadius="lg" shadow="md" flex="1">
                  <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
                    Prompt
                  </Text>
                  <Text fontSize="md" color="gray.300" mb={4}>
                    {image.prompt}
                  </Text>
                  {image.style && (
                    <>
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color="white"
                        mb={2}
                      >
                        Style
                      </Text>
                      <Text fontSize="md" color="gray.300">
                        {image.style}
                      </Text>
                    </>
                  )}
                </Box>
              </Flex>
            ))}
          </SimpleGrid>

          {/* Modal for fullskjermvisning */}
          <Modal isOpen={isOpen} onClose={onClose} size="4xl">
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody p={0}>
                {selectedImage && (
                  <Box>
                    <Image src={selectedImage.imageUrl} width="100%" />
                    <Box p={4} bg="gray.800" color="white">
                      <Text fontSize="lg" fontWeight="bold" mb={2}>
                        Prompt
                      </Text>
                      <Text mb={4}>{selectedImage.prompt}</Text>
                      {selectedImage.style && (
                        <>
                          <Text fontSize="lg" fontWeight="bold" mb={2}>
                            Style
                          </Text>
                          <Text>{selectedImage.style}</Text>
                        </>
                      )}
                    </Box>
                  </Box>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      )}

      {/* Sanger hvis det finnes */}
      {tool.songs && (
        <Box mt={8}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Genererte sanger:
          </Text>
          <SimpleGrid columns={1} spacing={6}>
            {tool.songs.map((song, index) => (
              <Flex
                key={index}
                align="start"
                gap={4}
                direction={{ base: "column", md: "row" }} // Kolonne på mobil, rad på større skjermer
              >
                {/* Tittelseksjon */}
                <Box bg="gray.800" p={4} borderRadius="lg" shadow="md" flex="1">
                  <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
                    Tittel
                  </Text>
                  <Text fontSize="md" color="gray.300" mb={4}>
                    {song.title}
                  </Text>

                  <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
                    Prompt
                  </Text>
                  <Text fontSize="md" color="gray.300" mb={4}>
                    {song.prompt}
                  </Text>

                  {song.style && (
                    <>
                      <Text
                        fontSize="lg"
                        fontWeight="bold"
                        color="white"
                        mb={2}
                      >
                        Style
                      </Text>
                      <Text fontSize="md" color="gray.300" mb={4}>
                        {song.style}
                      </Text>
                    </>
                  )}

                  <Link to={song.songUrl}>
                    <Button colorScheme="teal" size="sm">
                      Spill av sang
                    </Button>
                  </Link>
                </Box>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};

export default ToolDetails;
