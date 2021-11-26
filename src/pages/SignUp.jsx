import React, { useState, useContext } from 'react';
import * as PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PagesAffContext from '../contexts/PagesAffContext';
import ThemeContext from "../contexts/ThemeContext";

const theme2 = createTheme();

export default function SignUp() {
  const { setCurrentAffConnexion, setCurrentAffInscription, setRedirectHome, redirectHome } = useContext(PagesAffContext);
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
/*   const [champsRempli, setChampsRempli] = useState(''); */

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
    if(email && username && password)
    {
      axios
      .post(`http://localhost:3005/users`, user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      setCurrentAffConnexion(true);
      setRedirectHome(!redirectHome); 
    }else{
      alert(`Les champs ne sont pas tous rempli`)
    }
}

  return (
    <div style={{theme}}>
      <Link to="/" ><Button
        onClick={() => {
          setCurrentAffInscription(false);
          setCurrentAffConnexion(false);
        }}
        >
          <ArrowBackOutlinedIcon fontSize="large" />
        </Button>
      </ Link>
      <ThemeProvider theme={theme2}>
        <Container component="main" maxWidth="xs" sx={{ background: 'white' }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => {handleClick(e)}}
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
