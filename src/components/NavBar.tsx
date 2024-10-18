import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Box
      bg="rgba(0, 0, 0, 0.9)"
      px={4}
      py={3}
      shadow="md"
      position="sticky"
      top={0}
      zIndex={999}
      width="100%"
    >
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="teal.300"
          as={Link}
          to="/"
          _hover={{ textDecoration: "none" }}
        >
          Marentius
        </Text>

        {/* Home Button */}
        <Button colorScheme="teal" variant="outline" size="md" as={Link} to="/">
          Hjem
        </Button>
      </Flex>
    </Box>
  );
};

export default NavBar;
