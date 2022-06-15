import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import checkoutController from '../services/CRUD-services/Checkout-controller';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => (
  {
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}
));

export default function Checkout() {
  const { basket } = useSelector(({ basket }) => {
    return {
        basket: basket,
    }
  })

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // for submit
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const books = [];

  basket.forEach(element => {
    books.push({
      id: element.id,
      amount: 1
    })
  });

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleButtonClick = () => {
    if (firstName && lastName && address && city && country && phone && email) {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
      }
      checkoutController.postCheckout({
        id: 0,
        email: email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phone,
        country: country,
        city: city,
        address: address,
        message: message,
        amount: 1,
        books: books
      }).then(r => {
        if (r) {
          setSuccess(true);
          setLoading(false);
          alert("SUCCESS");
        }
      })
    }
  };

  return (
    <>
      <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Container component="main" maxWidth="sm" sx={{ py: 4}}>  
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              Shipping address
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  id="address"
                  name="address"
                  label="Address line"
                  fullWidth
                  autoComplete="shipping address-line"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="shipping country"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  autoComplete="phone"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  id="message"
                  name="message"
                  label="Message"
                  fullWidth
                  autoComplete="message"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                  label="Use this address for delivery details"
                />
              </Grid>
            </Grid>
            <div className={classes.wrapper}>
              <button
                variant="contained"
                color="primary"
                className={buttonClassname}
                disabled={loading}
                onClick={handleButtonClick}
                style={{backgroundColor: "blue", height: "50px", width: "200px", marginTop: "50px", marginBottom: "58px"}}
              >
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  CHECKOUT  
              </button>
            </div>
          </React.Fragment>
        </Container>
      </div>
      <Footer />
    </>
  );
}