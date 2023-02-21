import React, { useState, useRef } from 'react';
import { AppBar, Box, Grid, Link, TextField, Toolbar, Typography } from '@mui/material'
import { Image } from 'mui-image'
import { AuthButton } from '../theme';
import custom_axios from '../axios/AxiosSetup'
import { ApiConstants } from '../api/ApiConstants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LogInNavbar from '../components/LogInNavbar';

const city = require("../assets/city.png")

const Signup = () => {
  let navigate = useNavigate();

  let email: any = React.useRef();
  let password: any = React.useRef();

  const handleSignUp = async () => {
    const response = await custom_axios.post(ApiConstants.USER.SIGN_UP, {
      email: email.current.value,
      password: password.current.value,
    });

    console.log(response);
    navigate("/");
  }

  return (
    <Grid container
      sx={{
        width: "100%",
        height: "100vh",
        background: "#E5E5E5",
        padding: {xs:"24px", md: "0"}
      }}
    >
      <LogInNavbar />
      <Grid item xs={7} maxHeight="100%" display={{xs: "none", sm: "flex"}}>
        <Image src={city} alt="City" />
      </Grid>
      <Grid item  xs={12} md={5} px={{xs: 0, md: "100px" }} pt={{xs: "90px", md: "160px", xl: "255px" }}>
        <Box>
      <Typography variant="h4" color="#172234" mb="20px" textAlign="left">
        Sign Up
      </Typography>
      <Box justifyContent="start">
        <Typography variant="subtitle1" mb="10px">
          Email
        </Typography>
        <TextField 
          fullWidth 
          type="email" 
          required 
          placeholder="Email" 
          ref={email}
          variant="outlined" 
          sx={{
          mb: "20px", borderRadius: "5px", color: "#E0E0E0", border: "#E0E0E0"
          }} InputProps={{
          style: {
              color: "rgba(23, 34, 52, 0.5)",
              padding: "13px 20px", 
              fontSize: "14px",
              lineHeight: "22px",
            }
          }} 
        />
        <Typography variant="subtitle1" sx={{
          mb: "20px"
        }}>
          Password
        </Typography>
        <TextField 
          fullWidth 
          type="password" 
          required 
          variant="outlined" 
          ref={password}
          placeholder="Password" 
          sx={{
          mb: "20px", borderRadius: "5px", color: "#E0E0E0", border: "#E0E0E0", marginBottom: {xs: "24px", md: "40px", xl: "60px"}
          }} InputProps={{
          style: {
              color: "rgba(23, 34, 52, 0.5)",
              padding: "13px 20px", 
              fontSize: "14px",
              lineHeight: "22px",
              border: "#E0E0E0",
            }
          }}
        />
        <AuthButton fullWidth sx={{mb: "20px"}} onClick={handleSignUp}>
          Sign Up
        </AuthButton>
        <Typography variant="subtitle2" mb="10px">
            Alreadt have an account?
          <Link href="/login" sx={{
            textDecoration: "none", color: "#B29F7E", mb: "32px"
          }}> Sign In</Link>
        </Typography>
      </Box>      
    </Box>

      </Grid>
    </Grid>
  )
}

export default Signup