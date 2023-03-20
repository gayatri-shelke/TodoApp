import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav  >
      <AppBar sx={{ bgcolor: "#040273" }}>
      <Toolbar>
        <TextSnippetIcon sx={{ mr: 2 }} />
        <Typography  variant="h6" sx={{fontWeight: 'bold'}} textAlign='center'>
          Todo App
        </Typography>
      <Box sx={{ml:'auto'}}>
        <Button >
        
            <Link to="/Login"  variant="h6"  style={{ textDecoration: 'none',color: 'White',fontWeight: 'bold' }}>Login</Link>
          </Button>
          
          <Button>
            <Link to="/Register"  style={{ textDecoration: 'none',color: 'White',fontWeight: 'bold' }}>Register</Link>
          </Button>
          
          </Box>
      </Toolbar>
    </AppBar>
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;