import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Player from "../Player/Player";
import InfoUserContext from "../../contexts/InfoUserContext";
import { grey } from "@mui/material/colors";

require("dotenv").config();

export default function Quizz() {
  const { currentInfoUser, reponseBdd, setReponseBdd } =
    useContext(InfoUserContext);
  const [playlist, setPlaylist] = useState("");
  const [display, setDisplay] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const [response4, setResponse4] = useState("");
  const [helperText, setHelperText] = useState("");

  let i = false;
  console.log(process.env.REACT_APP_BDD);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BDD}/users/${currentInfoUser.id}`)
      .then((response) => {
        setReponseBdd(response.data);
      })
      .catch((error) => {});
  }, []);

  useEffect(() => {
    if (reponseBdd) {
      i = true;
      if (reponseBdd.R1 === 1) {
        setValue1(true);
        setResponse1("q1t");
      } else {
        setValue1(false);
        setResponse1("q1f");
      }
      if (reponseBdd.R2 === 1) {
        setValue2(true);
        setResponse2("q2t");
      } else {
        setValue2(false);
        setResponse2("q2f");
      }
      if (reponseBdd.R3 === 1) {
        setValue3(true);
        setResponse3("q3t");
      } else {
        setValue3(false);
        setResponse3("q3f");
      }
      if (reponseBdd.R4 === 1) {
        setValue4(true);
        setResponse4("q4t");
      } else {
        setValue4(false);
        setResponse4("q4f");
      }
      setPlaylist("1290316405");
      setDisplay(true);
      if (!value1 && !value2 && !value3 && value4) {
        // Amour
        setPlaylist("2809170204");
        setDisplay(true);
      } else if (!value1 && !value2 && value3 && !value4) {
        // Nouveauté
        setPlaylist("9550297062");
        setDisplay(true);
      } else if (!value1 && !value2 && value3 && value4) {
        // Au coin du feu
        setPlaylist("1083721131");
        setDisplay(true);
      } else if (!value1 && value2 && !value3 && !value4) {
        // Sport
        setPlaylist("1154685481");
        setDisplay(true);
      } else if (!value1 && value2 && !value3 && value4) {
        // Feel good
        setPlaylist("1203212111");
        setDisplay(true);
      } else if (!value1 && value2 && value3 && !value4) {
        // Essentiels
        setPlaylist("8453457822");
        setDisplay(true);
      } else if (!value1 && value2 && value3 && value4) {
        // Concentration
        setPlaylist("2269069702");
        setDisplay(true);
      } else if (value1 && !value2 && !value3 && !value4) {
        // Soirée
        setPlaylist("1061059991");
        setDisplay(true);
      } else if (value1 && !value2 && !value3 && value4) {
        // Fete noel
        setPlaylist("2474689942");
        setDisplay(true);
      } else if (value1 && !value2 && value3 && !value4) {
        // Actu rap
        setPlaylist("1071669561");
        setDisplay(true);
      } else if (value1 && !value2 && value3 && value4) {
        // Chill & Relax summer electro
        setPlaylist("914651125");
        setDisplay(true);
      } else if (value1 && value2 && !value3 && !value4) {
        // Running sport
        setPlaylist("7689476082");
        setDisplay(true);
      } else if (value1 && value2 && !value3 && value4) {
        // live rock
        setPlaylist("9694017462");
        setDisplay(true);
      } else if (value1 && value2 && value3 && !value4) {
        // hits de l'été
        setPlaylist("932386265");
        setDisplay(true);
      } else {
        // best of
        setPlaylist("9666268482");
        setDisplay(true);
      }
    } else if (i) {
      setDisplay(false);
      setValue1(false);
      setResponse1("q1f");
      setValue2(false);
      setResponse2("q2f");
      setValue3(false);
      setResponse3("q3f");
      setValue4(false);
      setResponse4("q4f");
    }
  }, [reponseBdd]);

  const handleRadioChange1 = (event) => {
    if (event.target.value === "q1t") {
      setValue1(true);
    } else {
      setValue1(false);
    }
    setResponse1(event.target.value);
  };
  const handleRadioChange2 = (event) => {
    if (event.target.value === "q2t") {
      setValue2(true);
    } else {
      setValue2(false);
    }
    setResponse2(event.target.value);
  };
  const handleRadioChange3 = (event) => {
    if (event.target.value === "q3t") {
      setValue3(true);
    } else {
      setValue3(false);
    }
    setResponse3(event.target.value);
  };
  const handleRadioChange4 = (event) => {
    if (event.target.value === "q4t") {
      setValue4(true);
    } else {
      setValue3(false);
    }
    setResponse4(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!value1 && !value2 && !value3 && !value4) {
      // chill relax
      setPlaylist("1290316405");
      setDisplay(true);
    } else if (!value1 && !value2 && !value3 && value4) {
      // Amour
      setPlaylist("2809170204");
      setDisplay(true);
    } else if (!value1 && !value2 && value3 && !value4) {
      // Nouveauté
      setPlaylist("9550297062");
      setDisplay(true);
    } else if (!value1 && !value2 && value3 && value4) {
      // Au coin du feu
      setPlaylist("1083721131");
      setDisplay(true);
    } else if (!value1 && value2 && !value3 && !value4) {
      // Sport
      setPlaylist("1154685481");
      setDisplay(true);
    } else if (!value1 && value2 && !value3 && value4) {
      // Feel good
      setPlaylist("1203212111");
      setDisplay(true);
    } else if (!value1 && value2 && value3 && !value4) {
      // Essentiels
      setPlaylist("8453457822");
      setDisplay(true);
    } else if (!value1 && value2 && value3 && value4) {
      // Concentration
      setPlaylist("2269069702");
      setDisplay(true);
    } else if (value1 && !value2 && !value3 && !value4) {
      // Soirée
      setPlaylist("1061059991");
      setDisplay(true);
    } else if (value1 && !value2 && !value3 && value4) {
      // Fete noel
      setPlaylist("2474689942");
      setDisplay(true);
    } else if (value1 && !value2 && value3 && !value4) {
      // Actu rap
      setPlaylist("1071669561");
      setDisplay(true);
    } else if (value1 && !value2 && value3 && value4) {
      // Chill & Relax summer electro
      setPlaylist("914651125");
      setDisplay(true);
    } else if (value1 && value2 && !value3 && !value4) {
      // Running sport
      setPlaylist("7689476082");
      setDisplay(true);
    } else if (value1 && value2 && !value3 && value4) {
      // live rock
      setPlaylist("9694017462");
      setDisplay(true);
    } else if (value1 && value2 && value3 && !value4) {
      // hits de l'été
      setPlaylist("932386265");
      setDisplay(true);
    } else {
      // best of
      setPlaylist("9666268482");
      setDisplay(true);
    }
    const Fk_id = currentInfoUser.id;
    if (reponseBdd) {
      const responses = {
        value1,
        value2,
        value3,
        value4,
      };
      axios
        .put(
          `${process.env.REACT_APP_BDD}/quizz/${currentInfoUser.id}`,
          responses
        )
        .then((response) => {})
        .catch((error) => {});
    } else {
      if (currentInfoUser.username) {
        const responses = {
          value1,
          value2,
          value3,
          value4,
          Fk_id,
        };
        axios
          .post(`${process.env.REACT_APP_BDD}/quizz`, responses)
          .then((response) => {})
          .catch((error) => {});
      }
    }

    // if (value1 === "q1t") {
    //   setHelperText("You got it!");
    // } else if (value1 === "q1f") {
    //   setHelperText("Sorry, wrong answer!");
    // } else {
    //   setHelperText("Please select an option.");
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ paddingLeft: "78px" }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel
            component="legend"
            sx={{
              color: grey[500],
            }}
          >
            Aimez-vous les fêtes ?
          </FormLabel>
          <RadioGroup
            aria-label="q1"
            name="q1"
            value={response1}
            onChange={handleRadioChange1}
          >
            <FormControlLabel
              value="q1t"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Oui"
            />
            <FormControlLabel
              value="q1f"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Non"
            />
          </RadioGroup>

          <FormLabel
            component="legend"
            sx={{
              color: grey[500],
            }}
          >
            Etes-vous sportif ?
          </FormLabel>
          <RadioGroup
            aria-label="q2"
            name="q2"
            value={response2}
            onChange={handleRadioChange2}
          >
            <FormControlLabel
              value="q2t"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Oui"
            />
            <FormControlLabel
              value="q2f"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Non"
            />
          </RadioGroup>

          <FormLabel
            component="legend"
            sx={{
              color: grey[500],
            }}
          >
            Aimez-vous les nouveautés ?
          </FormLabel>
          <RadioGroup
            aria-label="q3"
            name="q3"
            value={response3}
            onChange={handleRadioChange3}
          >
            <FormControlLabel
              value="q3t"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Oui"
            />
            <FormControlLabel
              value="q3f"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Non"
            />
          </RadioGroup>

          <FormLabel
            component="legend"
            sx={{
              color: grey[500],
            }}
          >
            Êtes-vous sentimentale ?
          </FormLabel>
          <RadioGroup
            aria-label="q4"
            name="q4"
            value={response4}
            onChange={handleRadioChange4}
          >
            <FormControlLabel
              value="q4t"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Oui"
            />
            <FormControlLabel
              value="q4f"
              control={
                <Radio
                  sx={{
                    color: grey[500],
                  }}
                />
              }
              label="Non"
            />
          </RadioGroup>

          <FormHelperText>{helperText}</FormHelperText>
          <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
            Give me a playlist
          </Button>
        </FormControl>
      </form>

      {display && <Player playlist={playlist} />}
    </>
  );
}
