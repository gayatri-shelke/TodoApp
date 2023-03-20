import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "./Login";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sName, LastName] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const theme = createTheme();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !sName ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 

  return (
    <ThemeProvider theme={theme}>
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Grid sx={{mt:30}}>
          {" "}
          {login ? (
            <form  onSubmit={handleFormSubmit}>
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
            Create Account
          </Typography>
          </Box>
            
              <Box component="form" noValidate  sx={{ mt: 5 }}>
              <Grid container spacing={5}>
              <Grid item xs={8} sm={6}>
                <TextField 
                  autoComplete="given-name"
                  name="firstName"
                  id="firstName"
                  onChange={(event) => setName(event.target.value)}

                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  required
                  id="LastNmae"
                  label="LastName"
                  name="LastName"
                  onChange={(event) => LastName(event.target.value)}

                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField sx={{width:380}}
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}

                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField sx={{width:380}}
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(event) => setPassword(event.target.value)}

                  autoComplete="new-password"
                />
              </Grid>

              <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 ,ml:20}}
              onClick={handleClick}
            >
              Register
            </Button>
              <Typography onClick={handleClick} className="forgot-password text-right" sx={{ml:15}}>
                Already Created{" "}log in?
                
              </Typography>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
              </Grid>
              </Box>
            </form>
          ) : (
            <Login />
          )}

          </Grid> 
          </Container>
        </ThemeProvider>
    
  );
}

export default Registration;
