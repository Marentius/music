import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll til toppen (0,0) når pathname endres
  }, [pathname]); // Lytter til endring i pathname

  return null; // Denne komponenten trenger ikke å returnere noe UI
};

export default ScrollToTop;
