import React, { useContext } from "react";
import PagesAffContext from "../contexts/PagesAffContext";
import ThemeContext from "../contexts/ThemeContext";
import CardPlaylist from "../containers/CardPlaylist";
import Grid from "@mui/material/Grid";
import "./pages.css";

export default function Playlist() {
  const { theme } = useContext(ThemeContext);
  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);

  return (
    <Grid
      container
      className="container"
      sx={{
        mt: 5,
      }}
      style={theme}
    >
      <Grid item xs={12} sx={{ mb: 5 }}>
        <h2>Bienvenue sur la page des playlists</h2>
      </Grid>
      <Grid item xs={8}>
        <CardPlaylist />
      </Grid>
    </Grid>
  );
}
