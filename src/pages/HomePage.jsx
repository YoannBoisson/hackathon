import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmojiWheel from "../components/EmojiWheel/EmojiWheel";
import Searchbar from "../components/SearchBar/Searchbar";
import PagesAffContext from "../contexts/PagesAffContext";
import Quizz from "../components/quizz/Quizz";
import ThemeContext from "../contexts/ThemeContext";
import './pages.css';

function HomePage() {
  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  const { theme } = useContext(ThemeContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);
  return (
    <Box sx={{ flexGrow: 1, paddingLeft:"78px" }} style={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Searchbar />
        </Grid>
        <Grid item xs={6}>
          <EmojiWheel />
        </Grid>
        <Grid item xs={6}>
          <Quizz sx={{theme}} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
