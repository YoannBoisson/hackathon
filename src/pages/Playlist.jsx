import React, { useContext } from "react";
import PagesAffContext from '../contexts/PagesAffContext';
import ThemeContext from "../contexts/ThemeContext";
import Box from "@mui/material/Box";
import './pages.css';

const Games = () => {
  const { setCurrentAffConnexion, setCurrentAffInscription } = useContext(PagesAffContext);
  const { theme } = useContext(ThemeContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);
  return <Box className="container" sx={{paddingLeft:"78px"}} style={theme}>
        <h1>Bienvenue sur la page des playlists</h1>
      </Box>;
};

export default Games;