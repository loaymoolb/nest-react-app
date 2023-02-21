import { Box, Link } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { AuthButton } from '../theme';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} maxWidth="100vw">
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
          <Box display="flex">
            <AuthButton 
              href="/login"
              variant="outlined" 
              fullWidth
              sx={{background: "none", color: "#B29F7E", mr: "10px",  minWidth: "160px"}}
            >
              Log In
            </AuthButton>
            <AuthButton variant="contained" href="/signup" fullWidth sx={{minWidth: "160px", display: {xs: "none", sm: "flex"}}} >
              Sign Up
            </AuthButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar