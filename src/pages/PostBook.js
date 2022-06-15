import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
export default function PostBook() {
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

  // description
  const [value, setValue] = React.useState('Controlled');
  const handleChangeDescription = (event) => {
    setValue(event.target.value);
  };

  // categories
  const [personName, setPersonName] = React.useState([]);
  const handleChangeCategories = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      
    }

    if (true) {
      setSuccess(true);
      setLoading(false);
    }
  };
  return (
    <>
      <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Container component="main" maxWidth="sm" sx={{ py: 4}}>  
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              SUBMIT BOOK
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  id="name"
                  name="name"
                  label="Title"
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
                  id="author"
                  name="author"
                  label="Author"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Description"
                  multiline
                  required
                  fullWidth
                  maxRows={4}
                  value={value}
                  onChange={handleChangeDescription}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ m: 1, width: 250 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    required
                    value={personName}
                    onChange={handleChangeCategories}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name} style={{display: "flex", height: "50px"}}>
                        <Checkbox checked={personName.indexOf(name) > -1}/>
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  id="state"
                  name="state"
                  required
                  label="Number of Pages"
                  fullWidth
                  variant="standard"
                />
              </Grid>
            </Grid>
            <div className={classes.wrapper}>
              <Button
                variant="contained"
                color="primary"
                className={buttonClassname}
                disabled={loading}
                onClick={handleButtonClick}
              >
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  SUBMIT  
              </Button>
            </div>
          </React.Fragment>
        </Container>
      </div>
      <Footer />
    </>
  );
}