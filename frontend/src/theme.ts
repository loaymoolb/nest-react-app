import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: [
        'Merriweather',
        'serif',
      ].join(','),
      fontWeight: "700",
      fontSize: "64px",
      lineHeight: 1.5,
      color: "#fff",
      '@media (max-width:1024px)': {
        fontSize: "64px",
      },
      '@media (max-width:768px)': {
        fontSize: "36px",
      },
      '@media (max-width:480px)': {
        fontSize: "24px",
      },
    },
    h4: {
      fontFamily: [
        'Merriweather',
        'serif',
      ].join(','),
      fontWeight: "700",
      fontSize: "28px",
      lineHeight: "1.2",
      color: "#B29F7E",
      '@media (max-width:768px)': {
        fontSize: "24px",
      },
      '@media (max-width:480px)': {
        fontSize: "18px",
      },

    },
    h5: {
      fontFamily: [
        'Merriweather',
        'serif',
      ].join(','),
      fontWeight: "400",
      fontSize: "28px",
      lineHeight: "44px"
    },
    h6: {
      fontFamily: [
        'Merriweather',
        'serif',
      ].join(','),
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "34px",
    },
    body1: {
      fontSize: "24px",
      lineHeight: "1.4",
      color: "#fff",
      '@media (max-width:768px)': {
        fontSize: "20px",
      },
      '@media (max-width:480px)': {
        fontSize: "16px",
      },
    },
    body2: {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "22px",
      color: "#fff"
    },
    button: {
      fontFamily: [
        'Merriweather',
        'serif',
      ].join(','),
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "22px",
      textAlign: "center",
      textTransform: "capitalize"
    },
    subtitle1: {
      fontFamily: [
        'Merriweather',
        'serif',
      ].join(','),
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "20px",
      color: "#000",
      textAlign: "left"
    },
    subtitle2: {
      fontFamily: [
        'Merriweather',
        'serif',
      ].join(','),
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "22px",
      color: "#000",
    }
  },
   palette: {
    secondary: {
      main: '#B29F7E',
    },
  },
});

export const AuthButton = styled(Button)({
    boxShadow: 'none',
    py: '11px',
    border: '1px solid',
    borderRadius: '5px',
    color: '#FFF',
    borderColor: '#B29F7E',
    backgroundColor: '#B29F7E',
    '&:hover': {
      backgroundColor: '#B29F7E',
      borderColor: '#B29F7E',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#B29F7E',
      borderColor: '#B29F7E',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #B29F7E',
    }
})

export const StartButton = styled(Button)({
  background: "none", 
  minWidth: "160px",
  boxShadow: 'none',
  p: '10px 24px',
  border: '1px solid #fff',
  borderRadius: '8px',
  color: '#FFF',
  fontSize: "20px",
  lineHeight: "34px",
  '&:hover': {
    backgroundColor: '#B29F7E',
    borderColor: '#B29F7E',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#B29F7E',
    borderColor: '#B29F7E',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem #B29F7E',
  },
  '@media (max-width:480px)': {
    marginBottom: "36px",
  },
})

export const StyledForm = styled(Button) ({
  
})

// font-family: 'Lato', sans-serif;
// font-family: 'Merriweather', serif;