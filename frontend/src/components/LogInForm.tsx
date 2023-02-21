import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useState,useRef } from 'react'
import { AuthButton } from '../theme'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ApiConstants } from '../api/ApiConstants'
import custom_axios from '../axios/AxiosSetup'

const LogInForm: React.FC = () => {
  let navigate = useNavigate();
  let email: any = React.useRef();
  let password: any = React.useRef();

  const handleSignin = async () => {
    try {
      const response = await custom_axios.post(ApiConstants.LOGIN, { 
        email: email.current.value,
        password: password.current.value,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error: any) {
      console.log(error.response.data.message);
    }
  }

  return (
    <Box>
      <Typography variant="h4" color="#172234" mb="20px" textAlign="left">
        Login
      </Typography>
      <Box justifyContent="start">
        <Typography variant="subtitle1" mb="10px">
          Email
        </Typography>
        <TextField 
          fullWidth 
          type="email" 
          required 
          ref={email}
          placeholder="Email" 
          variant="outlined" 
          sx={{
          mb: "20px", borderRadius: "5px", color: "#E0E0E0", border: "#E0E0E0"
          }} InputProps={{
          style: {
              color: "rgba(23, 34, 52, 0.5)",
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
          placeholder="Password" 
          ref={password}
          sx={{
          mb: "20px", borderRadius: "5px", color: "#E0E0E0", border: "#E0E0E0", marginBottom: {xs: "24px", md: "40px", xl: "60px"}
          }} InputProps={{
          style: {
              color: "rgba(23, 34, 52, 0.5)",
              fontSize: "14px",
              lineHeight: "22px",
              border: "#E0E0E0",
            }
          }}
        />
        <AuthButton fullWidth sx={{mb: "20px"}} onClick={handleSignin}>
          Sign In
        </AuthButton>
        <Typography variant="subtitle2" mb="10px">
          Don’t have account?
          <Link href="/signup" sx={{
            textDecoration: "none", color: "#B29F7E", mb: "32px"
          }}> Sign Up</Link>
        </Typography>
      </Box>      
    </Box>
  )
}

export default LogInForm;