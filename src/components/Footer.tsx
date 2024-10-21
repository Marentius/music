import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      bg="rgba(0, 0, 0, 0.9)"
      color="white"
      textAlign="center"
      p={4}
      mt={8} // Margin top for å gi luft over innhold
      borderTop="1px solid rgba(0,0,0,0)" // En svak kantlinje på toppen
      width="100%" // Fyll hele bredden av skjermen
      position="static" // Endrer til static posisjonering (standard)
    >
      <Text fontSize="s">&copy; 2024 Marentius</Text>
    </Box>
  );
};

export default Footer;
