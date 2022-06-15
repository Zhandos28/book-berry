import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Footer from '../components/Footer';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import bookController from '../services/CRUD-services/Book-Controller';

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
  'fiction',
  'science',
];

export default function PostBook() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  // for submit
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [pages, setPages] = React.useState(0);

  // description
  const [description, setDescription] = React.useState('');
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  // categories
  const [categories, setCategories] = React.useState([]);
  const handleChangeCategories = (event) => {
    const {
      target: { value },
    } = event;
    setCategories(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  const submit = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      
    }

    if (false) {
      bookController.postNewBook({
        name: "string",
        description: "string",
        ageLimit: 0,
        author: "string",
        language: 0,
        quantity: 0,
        categories: [
          {
            id: 0,
            name: "string"
          }
        ],
        numberOfPage: 0,
        photo: {
          name: "string",
          url: "string"
        }
      }).then(r => {
        if (r) {
          setSuccess(true);
          setLoading(false);
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
                  value={description}
                  onChange={handleChangeDescription}
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ m: 1, width: 250 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Categories</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    required
                    value={categories}
                    onChange={handleChangeCategories}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name} style={{display: "flex", height: "50px"}}>
                        <Checkbox checked={categories.indexOf(name) > -1}/>
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                  id="pages"
                  name="pages"
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
                onClick={submit}
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