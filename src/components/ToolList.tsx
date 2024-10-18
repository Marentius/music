// ToolsList.tsx

import React from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { tools, Tool } from "../tools"; // Importer verktøyliste fra tools.ts

const ToolList: React.FC = () => {
  return (
    <Flex
      direction="column"
      bg="rgba(0, 0, 0, 0.0)"
      color="white"
      p={8}
      alignItems="center"
    >
      {/* Header */}
      <Text fontSize="3xl" fontWeight="bold" color="white" mb={8}>
        Verktøy brukt i prosjektet
      </Text>

      {/* Tools List */}
      <Flex direction="column" gap={6} width="100%" maxWidth="800px">
        {tools.map((tool: Tool) => (
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
            {/* Icon */}
            <Box mr={6}>
              <Icon as={() => tool.icon} boxSize={12} />
            </Box>

            {/* Tool Info */}
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
    </Flex>
  );
};

export default ToolList;
