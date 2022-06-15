import * as React from 'react';
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import authServices from '../services/auth-services/Auth.service'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import singup from '../assets/signup.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [password2, setPassword2] = React.useState();
  const [fullName, setFullname] = React.useState();
  const [userName, setUserName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    setPassword(password);
    setLoading(true);
    
    if (password === password2) {
        try {
            authServices.signup(email, password, fullName, userName, phone).then((response) => {
                if(response) 
                    navigate("/signin");
                    setLoading(false);
                },
                (error) => {
                    console.log(error);
                    setLoading(false);
                }
            );
        } catch (err) {
            console.log(err);
        }
    }
    else {
        setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={4}
          sx={{
            backgroundImage: `url(${singup})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                }}
            >
                <Typography component="h1" variant="h5" sx={{alignItems: 'left', justifyContent: 'left'}}>
                Sign in to BookBerry
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, maxWidth:500 }}>
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        label="Full Name"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullname(e.target.value)}
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        required
                        type = "email"
                        fullWidth
                        label="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                    <TextField
                        margin="dense"
                        fullWidth
                        type = "text"
                        label="Phone number"
                        pattern="(\+7|8)[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="phone"
                    />  
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        type="password"
                        label="Repeat Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                    
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, height: 45,  backgroundColor: '#724DFF'}}
                >
                    Sign Up
                </Button>
                <Grid container>
                  <Grid item>
                    <Link href='/signin' variant="body2" style={{cursor: "pointer"}}>
                      Sign In
                    </Link>
                  </Grid>
                </Grid>
                </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}