import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { StartButton } from '../theme'

const bgImage = require("../assets/bgImage.png")

const Header = () => {
  return (
    <Grid container sx={{
      maxWidth: "100%",
      height: {xs: "100%", sm: "100vh"},
      zIndex: -2,
      background: `url(${bgImage}) no-repeat center center`,
      backgroundSize: "cover",
      '&::before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: {xs: "100%", sm: "100vh"},
        backgroundColor: "#172234",
        opacity: 0.6,
      }
    }}
    >
      <Grid item xs={12} sx={{
        position: "relative",
        zIndex: 1,
        pt: {xs: "20vh", lg: "35vh"}
      }}>
        <Typography variant="h1" px={{xs: "24px", sm: "64px", md: "48px", lg:"80px"}} mb="10px">
          The chemical  negatively charged
        </Typography>
        <Typography variant="body1" px={{xs: "32px", sm: "64px", md: "150px", lg: "300px"}} mb="30px">
          Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is 
        </Typography>
        <StartButton variant="outlined" href="/login">
          Get Started
        </StartButton>
      </Grid>
    </Grid>
  )
}

export default Header