import React from 'react';
import { AppBar, Box, Grid, Link, TextField, Toolbar } from '@mui/material'

const LogInNavbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar 
      position="absolute" 
      sx={{ 
        top: "0", left: "0", right: "0",
        bgcolor: "#172234",
        p: {xs: "10px 24px", md: "18px 80px"}
      }}
    > 
      <Toolbar sx={{px: "0", flexDirection: "space-between"}} disableGutters>
          <Link 
            href="/"
            underline="none"
            sx={{ 
              flexGrow: 1,
              textAlign: "left",
              fontFamily: [
                'Merriweather',
                'serif',
              ].join(','),
              fontWeight: "400",
              fontSize: {xs: "16px", sm: "22px", md: "28px"},
              lineHeight: "1.6",
              color: "white"
            }} 
            >
            My Logo
          </Link>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default LogInNavbar