import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
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
import fileUpload from '../services/CRUD-services/file-upload';
import { blue } from '@mui/material/colors';

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
  const [name, setName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [pages, setPages] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [ageLimit, setAgeLimit] = React.useState("");

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

  // photo
  const [selectedImage, setSelectedImage] = React.useState();
  let formData = new FormData();

  const uploadImage = (event) => {
    for (let key in event.target.files) {
        if(typeof event.target.files[key] === 'object' && event.target.files[key].type.split('/')[0] === "image") {
            setSelectedImage(event.target.files[key]);
        }
    }
  }

  const submit = () => {
    if (selectedImage && name && author && pages && language && quantity && ageLimit) {
      if (!loading) {
        setSuccess(false);
        setLoading(true);
      }
      formData.append("file", selectedImage)
      fileUpload.getFileUrl(formData).then(r => {
        if (r) {
          bookController.postNewBook({
            name: name,
            description: description,
            ageLimit: ageLimit,
            author: author,
            quantity: quantity,
            photo: {
              name: r[0].filename,
              url: r[0].url
            }
          }).then(r => {
            if (r) {
              setSuccess(true);
              setLoading(false);
              window.location.reload();
            }
          })
        }
      })
    }
  };

  return (
    <>
      <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Container component="main" maxWidth="sm" sx={{ py: 4}}>  
          <>
            <Typography variant="h6" gutterBottom>
              SUBMIT BOOK
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  id="pages"
                  name="pages"
                  required
                  label="Language"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  id="pages"
                  name="pages"
                  required
                  label="Quantity"
                  fullWidth
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={ageLimit}
                  onChange={(e) => setAgeLimit(e.target.value)}
                  id="pages"
                  name="pages"
                  required
                  label="Age limit"
                  fullWidth
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
              <div sx={{ mt: 6 }}>
                <div className="preview">
                  {selectedImage && (
                    <div style={{ width: "600px" }}>
                      <div style={{ width: "160px", height: "128px", position: "relative", display: "inline-block", marginTop: "4px", marginBottom: "4px" }}>
                        <img alt="not fount" src={URL.createObjectURL(selectedImage)} style={{ height: "200px", width: "400px", objectPosition: "center", objectFit: "contain" }}/>
                      </div>
                    </div>
                  )}
                </div>
                <div style={{ marginTop: "12px", display: "inline-block", textAlign: "center"}}>
                    <label htmlFor="image_uploads" style={{ display: "flex", justifyContent: "center", width: "100px", alignItems: 'center', height: "40px", backgroundColor: "blue", borderRadius:4}}>
                        Photo
                        <input
                          type="file"
                          id="image_uploads"
                          onChange={uploadImage}
                          style={{ visibility: "hidden" }}
                          multiple
                        />
                    </label>
                </div>
              </div>
            </Grid>
            <div className={classes.wrapper}>
              <button
                variant="contained"
                color="primary"
                className={buttonClassname}
                disabled={loading}
                onClick={submit}
                style={{backgroundColor: "blue", height: "50px", width: "200px", marginTop: "50px", marginBottom: "58px"}}
              >
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  SUBMIT  
              </button>
            </div>
          </>
        </Container>
      </div>
      <Footer />
    </>
  );
}