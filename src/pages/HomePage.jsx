import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmojiWheel from "../components/EmojiWheel/EmojiWheel";
import Searchbar from "../components/SearchBar/Searchbar";
import PagesAffContext from "../contexts/PagesAffContext";

function HomePage() {
  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Searchbar />
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}>
          <EmojiWheel />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
