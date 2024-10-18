// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: 'dark', // Start med dark mode
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bgImage: "url('/background.png')",
        bgSize: "cover",
        bgPosition: "center",
        bgRepeat: "no-repeat",
        color: "white",
        minHeight: "100vh", // Dekker hele høyden
        bgAttachment: "fixed", // Holder bakgrunnen på plass ved scrolling
      },
    },
  },
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111',
    },
    // Legg til flere farger hvis ønskelig
  },
});

export default theme;
