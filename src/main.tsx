import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react"; // Import ChakraProvider
import App from "./App";

const theme = extendTheme({
  colors: {
    brand: {
      900: "#1a202c",
      800: "#2d3748",
      700: "#4a5568",
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
