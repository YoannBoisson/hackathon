import React, { useState, useContext } from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PagesAffContext from "../contexts/PagesAffContext";

const theme = createTheme();
require("dotenv").config();

export default function SignUp() {
  const {
    setCurrentAffConnexion,
    setCurrentAffInscription,
    setRedirectHome,
    redirectHome,
  } = useContext(PagesAffContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  /*   const [champsRempli, setChampsRempli] = useState(''); */

  /*   setCurrentAffInscription(true);
  setCurrentAffConnexion(false); */

  function handleClick(e) {
    e.preventDefault();
    /*     let champsRempliFonction = '' */
    const user = {
      email,
      username,
      password,
    };
    /*     !email && (champsRempliFonction += champsRempliFonction + 'email');
    !username && (champsRempliFonction += champsRempliFonction + 'username');
    !password && (champsRempliFonction += champsRempliFonction + 'password');
    setChampsRempli(champsRempliFonction); */
    if (email && username && password) {
      axios
        .post(`${process.env.REACT_APP_BDD}/users`, user)
        .then((response) => {})
        .catch((error) => {});
      setCurrentAffConnexion(true);
      setRedirectHome(!redirectHome);
    } else {
      alert(`Les champs ne sont pas tous rempli`);
    }
  }

  return (
    <div>
      <Link to="/">
        <Button
          onClick={() => {
            setCurrentAffInscription(false);
            setCurrentAffConnexion(false);
          }}
        >
          <ArrowBackOutlinedIcon fontSize="large" />
        </Button>
      </Link>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{ background: "white" }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Grid item xs={8} lg={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="email"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={8} lg={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={8} lg={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={8} lg={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="J'accepte de recevoir des spams de la part de nos partenaires de la Wild Code School."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, ml:10, width: 100 }}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
SignUp.propTypes = {
  setAffInscription: PropTypes.node.isRequired,
};
