import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmojiWheel from "../components/EmojiWheel/EmojiWheel";
import Searchbar from "../components/SearchBar/Searchbar";
import PagesAffContext from "../contexts/PagesAffContext";
import Quizz from "../components/quizz/Quizz";
import ThemeContext from "../contexts/ThemeContext";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { grey } from "@mui/material/colors";
import "./pages.css";

function HomePage() {
  const { setCurrentAffConnexion, setCurrentAffInscription } =
    useContext(PagesAffContext);
  const { theme } = useContext(ThemeContext);
  const [currentChoose, setCurrentChoose] = useState(true);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);

  function handleChange(e) {
    if (e.target.value === "mood") {
      setCurrentChoose(true);
    } else {
      setCurrentChoose(false);
    }
  }

  return (
    <Box sx={{ flexGrow: 1}} style={theme}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Searchbar />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center", height: 100 }}/>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Choose</FormLabel>
            <RadioGroup
              row
              aria-label="choose"
              name="row-radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="mood"
                control={
                  <Radio
                    sx={{
                      color: grey[500],
                    }}
                  />
                }
                label="Mood"
              />
              <FormControlLabel
                value="personality"
                control={
                  <Radio
                    sx={{
                      color: grey[500],
                    }}
                  />
                }
                label="Personality"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {currentChoose ? (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <EmojiWheel />
          </Grid>
        ) : (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Quizz sx={{ theme }} />
          </Grid>
        )}
        <Grid item xs={12}></Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
