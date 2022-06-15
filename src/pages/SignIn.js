import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AuthService from '../services/auth-services/Auth.service';

import singin from '../assets/signin.png';
import { padding } from '@mui/system';

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

export default function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [notCorrect, setNotCorrect] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== "" && email !== "") {
      setLoading(true);
      try {
          console.log(email)
          console.log(password)
          AuthService.signin(email, password).then((r) => {
                  if(r) {
                      setNotCorrect(false);
                      window.location.href = "/";
                  }
              },
              (error) => {
                  setLoading(false);
                  setNotCorrect(true);
              }
          );
      } catch (err) {
          setLoading(false);
      }
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
            backgroundImage: `url(${singin})`,
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
              my: 12,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#724DFF' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{alignItems: 'left', justifyContent: 'left'}}>
              Sign in to BookBerry
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, maxWidth: 500 }}>
              <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={email}
                    label="Email Address"
                    type = "email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={password}
                    label="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
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
                  <Link href='/signup' variant="body2" style={{cursor: "pointer"}}>
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}