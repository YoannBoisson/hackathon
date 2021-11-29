/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InfoUserContext from '../contexts/InfoUserContext';
import PagesAffContext from '../contexts/PagesAffContext';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const { setCurrentInfoUser } = useContext(InfoUserContext);
  const { setCurrentAffConnexion,
     setCurrentAffInscription,
      setRedirectHome,
       redirectHome,
        setCurrentAffDescription
       } = useContext(PagesAffContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [connexion, setConnexion] = useState(false);
  const [id, setId] = useState(0);
  const [trueUsername, setTrueUsername] = useState('');
  const [truePassword, setTruePassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('username'),
      password: data.get('password'),
    });
  }; 

  function handleClickSignIn() {
    axios
      .get('http://localhost:3005/users') // requête de la page
      .then((res) => {
        // permet de transmettre à items la réponse de l'API grâce à "setState"
        setUsers(res.data);
      }, []); // si pages ou apiFilter change on éxecute le useEffect
  }

  useEffect(() => {
    setConnexion(false);
    users.forEach((user) => {
      if (user.username === username) {
        if (user.password === password) {
          setConnexion(true);
          setId(user.id);
        } else {
          return setTruePassword('mot de passe');
        }
      } else {
        return setTrueUsername('username');
      }
    });
  }, [users]);

  useEffect(() => {
    if (connexion) {
      axios
        .get(`http://localhost:3005/users/${id}`) // requête de la page
        .then((res) => {
          // permet de transmettre à items la réponse de l'API grâce à "setState"
          setCurrentInfoUser(res.data);
          setCurrentAffConnexion(true);
          setCurrentAffInscription(true);
          setRedirectHome(!redirectHome);
          setCurrentAffDescription(true);
        }); // si pages ou apiFilter change on éxecute le useEffect
      alert('connecté');    
    } /* else {
      if(username && password)
      {
        if(trueUsername && truePassword)
        {
          return alert(`Le mot de passe et le username sont faux !`);
        } else
        if(trueUsername)
        {
          return alert(`Le username est faux !`);
        } else
        if(truePassword)
        {
          return alert(`Le password est faux !`);
        }
      } 
    }*/
  }, [connexion]);

  return (
    <div>
      <NavLink to="/">
        <Button
        onClick={() => {
          setCurrentAffInscription(false);
          setCurrentAffConnexion(false);
        }}
        >
          <ArrowBackOutlinedIcon fontSize="large" />
        </Button>
      </ NavLink>

      <ThemeProvider theme={theme}>
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
            <Avatar sx={{ m: 1, bgcolor: 'primary' }} />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  handleClickSignIn();
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/#" variant="body2">
                    Dont have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}