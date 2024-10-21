import React from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { tools, Tool } from "../tools";

const ToolList: React.FC = () => {
  const aiTools = tools.filter((tool) => tool.category === "AI Verktøy");
  const otherTools = tools.filter((tool) => tool.category === "Øvrige Verktøy");

  return (
    <Flex
      direction="column"
      bg="rgba(0, 0, 0, 0.0)"
      color="white"
      p={8}
      alignItems="center"
    >
      <Text fontSize="3xl" fontWeight="bold" color="white" mb={8}>
        Verktøy brukt i prosjektet
      </Text>

      {/* AI Verktøy */}
      <Box width="100%" maxWidth="800px" mb={10}>
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          AI Verktøy (Klikk på et verktøy for å se detaljer)
        </Text>
        <Flex direction="column" gap={6}>
          {aiTools.map((tool: Tool) => (
            <Link to={`/tools/${tool.id}`} key={tool.id}>
              <Box
                bg="rgba(0, 0, 0, 0.9)"
                rounded="lg"
                shadow="lg"
                overflow="hidden"
                p={6}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
              >
                <Box mr={6}>
                  <Icon as={() => tool.icon} boxSize={12} />
                </Box>
                <Box flex="1">
                  <Text fontSize="xl" fontWeight="bold" color="white">
                    {tool.name}
                  </Text>
                  <Text fontSize="md" color="gray.400">
                    {tool.description}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>

      {/* Øvrige Verktøy (ikke klikkbare) */}
      <Box width="100%" maxWidth="800px">
        <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
          Øvrige Verktøy
        </Text>
        <Flex direction="column" gap={6}>
          {otherTools.map((tool: Tool) => (
            <Box
              key={tool.id}
              bg="rgba(0, 0, 0, 0.9)"
              rounded="lg"
              shadow="lg"
              overflow="hidden"
              p={6}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              _hover={{ transform: "scale(1.05)", transition: "0.3s ease" }}
            >
              <Box mr={6}>
                <Icon as={() => tool.icon} boxSize={12} />
              </Box>
              <Box flex="1">
                <Text fontSize="xl" fontWeight="bold" color="white">
                  {tool.name}
                </Text>
                <Text fontSize="md" color="gray.400">
                  {tool.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default ToolList;
