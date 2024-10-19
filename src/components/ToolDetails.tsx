// ToolDetails.tsx

import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Icon } from "@chakra-ui/react";
import { Tool } from "../tools";

interface ToolDetailsProps {
  tools: Tool[];
}

const ToolDetails: React.FC<ToolDetailsProps> = ({ tools }) => {
  const { id } = useParams<{ id: string }>();
  const tool = tools.find((tool) => tool.id === parseInt(id || "0"));

  if (!tool) {
    return <Text>Verktøy ikke funnet!</Text>;
  }

  return (
    <Box
      bg="rgba(0, 0, 0, 0.9)"
      p={6}
      rounded="lg"
      shadow="lg"
      color="white"
      maxWidth="800px"
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

      {/* Eksempelvis plass for mer informasjon om verktøyet */}
      <Text fontSize="sm" color="gray.300" mt={4}>
        Dette er plassen for alle relevante prompts, svar og annen informasjon
        om {tool.name}.
      </Text>
    </Box>
  );
};

export default ToolDetails;
