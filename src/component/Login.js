import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function LoginPage() {
  const theme = createTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Authenticate user and store credentials in local storage
    localStorage.setItem('user', JSON.stringify({ email }));
    window.location.href = '/Card';
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <Grid sx={{mt:30}}>
          {" "}
    <form onSubmit={handleSubmit}>
    <Typography component="h1" variant="h4"  sx={{fontWeight: 'bold'}}>
    Login
  </Typography>
    <Box sx={{ mt: 5 }}>
    <Grid container spacing={2}>
    <Grid item xs={8} sm={6}>
              <TextField sx={{mt:2,width:400}}
              type="email"
              label="email"

              className="form-control"
              value={email} onChange={handleEmailChange}
            />
    </Grid>
      <Grid item xs={12}>
              <TextField sx={{mt:3, width:400}} 
              type="password"
              label="password"

              className="form-control"
              value={password} onChange={handlePasswordChange}
            />
              </Grid>
      
      </Grid>
      <Button variant="contained"
      sx={{ mt: 3, mb: 5,ml:5,width:200 }} type="submit" textAlign='center'>Login</Button>
      </Box>
    </form>
    </Grid> 
    </Container>
  </ThemeProvider>
  </>
  );
}

export default LoginPage;