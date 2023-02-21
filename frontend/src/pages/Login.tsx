import { AppBar, Box, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Image } from 'mui-image'
import LogInForm from '../components/LogInForm'
import LogInNavbar from '../components/LogInNavbar'
import { useNavigate } from 'react-router-dom'
const city = require("../assets/city.png")


const LogIn = () => {

  return (
    <Grid container
      sx={{
        width: "100%",
        height: "100vh",
        background: "#E5E5E5",
        padding: {xs:"24px", md: 0}
      }}
    >
      <LogInNavbar />
      <Grid item xs={7} maxHeight="100%" display={{xs: "none", md: "flex"}}>
        <Image src={city} alt="City" />
      </Grid>
      <Grid item xs={12} md={5} px={{xs: 0, md: "100px" }} pt={{xs: "90px", md: "160px", xl: "255px" }}>
        <LogInForm />
      </Grid>
    </Grid>
  )
}

export default LogIn