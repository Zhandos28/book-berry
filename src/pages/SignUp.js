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
  const [fullName, setFullname] = React.useState();
  const [userName, setUserName] = React.useState();
  const [phone, setPhone] = React.useState();

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    // setPassword(password1);
    //     setLoading(true);
    //     userController.checkUserName(telephone).then(r => {
    //         if(r===true) {
    //             setLoading(false);
    //             setNotExists(true);
    //         }else {
    //             if (password1 === password2) {
    //                 try {
    //                     authService.signup(telephone, password).then((response) => {
    //                         if(response) 
    //                             navigate("/signin");
    //                             setLoading(false);
    //                         },
    //                         (error) => {
    //                             console.log(error);
    //                             setLoading(false);
    //                         }
    //                     );
    //                 } catch (err) {
    //                     console.log(err);
    //                 }
    //             }
    //             else {
    //                 setLoading(false);
    //                 setNotMatchPassowrd(true);
    //             }
    //         }
    //     });
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
              my: 6,
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
                        id="full-name"
                        label="Full Name"
                        name="full-name"
                        autoComplete="full-name"
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        fullWidth
                        id="phone"
                        label="Phone number"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                    />  
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                    />
                    <TextField
                        margin="dense"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                    />
                    
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, height: 45,  backgroundColor: '#724DFF'}}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Typography sx={{fontSize: 14}}>
                    Questions? Email us at 
                    </Typography>
                    <Link href="#" variant="body2">
                        support@bookberry.kz
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
                </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}