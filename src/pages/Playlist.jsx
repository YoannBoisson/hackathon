import React, { useContext } from "react";
import PagesAffContext from "../contexts/PagesAffContext";
import ThemeContext from "../contexts/ThemeContext";
import CardPlaylist from "../containers/CardPlaylist";
import Box from "@mui/material/Box";
import "./pages.css";

export default function Playlist() {
  const { theme } = useContext(ThemeContext);
  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);

  return (
    <Box className="container" sx={{ paddingLeft: "78px" }} style={theme}>
      <h1>Bienvenue sur la page des playlists</h1>
      <CardPlaylist />
    </Box>
  );
}
