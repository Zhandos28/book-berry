import { Box, Typography, Grid , Checkbox, Button, IconButton, Collapse } from '@mui/material'
import React, { useState } from 'react';
import Footer from '../components/Footer'
import { Search, SearchIconWrapper, StyledInputBase } from '../components/Search/Search';
import Pagination from '@mui/material/Pagination';
import usePagination from "../components/Pagination/usePagination";
import SearchIcon from '@mui/icons-material/Search';
import Book from '../components/Book';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBook } from '../redux/actions/book';

const filters = ["All", "For adults", "For children", "For boys", "For girls", "Fiction", "Scientific literature",
    "Kazakh literature", "Russian Literature", "World Literature", "Psyshology", "Busieness literature", "Political Science", "Philosophy", "History"    
];

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    position:"absolute",
    marginTop:10,
    right:660,
  }));

const useStyles = makeStyles((theme) => ({
  root: {
    '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
      backgroundColor: 'transparent',
      color:'#19D5C6',
     },
  },
    pagination: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom:"5px",
    },
  }));

export default function BookList() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [isOpen, setIsOpen] = useState(false);
    const [activeButton, setActiveButton] = useState("Best seller");
    const booksType = ["Best seller", "Popular", "News"];
    const [page, setPage] = useState(1);
    const PER_PAGE = 8;
    const [expanded, setExpanded] = React.useState(false);
    const [searchField, setSearchField] = useState("");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { details } = useSelector(({ books }) => {
    return {
      details: books.items,
    }
  })

  const dispatch = useDispatch();
  const handleRead = (book) => {
    dispatch(setBook(book));
  };


  const filteredBooks = details.filter(
    book => {
      return (
        book
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        book
        .author
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );
  const handleChanges = e => {
    setSearchField(e.target.value);
  };

  const count = Math.ceil(filteredBooks.length / PER_PAGE);
  const _DATA = usePagination(filteredBooks, PER_PAGE);

  const classes = useStyles();
  const handleChange = (e, p) => {
      setPage(p);
      _DATA.jump(p);
  };

  const buttonChange = (event) => {
      setActiveButton(event.target.value);
  };

  const handle = () => {
      setIsOpen(!isOpen);
  }
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Box>
            <Typography sx={{fontSize:24, color:"white", textAlign:"center", py:"2%"}}>
                Book List
            </Typography>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  onChange = {handleChanges}
                />
            </Search>
            <Box sx={{display:'flex', my:6, justifyContent:"space-between", width: 340, mx:'37%'}}>
            {
                booksType.map((btn) => (
                    <Button variant='text' 
                    sx={activeButton === btn ? {height:"ingerit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0, borderBottom:"1px solid"}: 
                    {height:"ingerit", backgroundColor:"inherit", color:"white", outline: "none", fontSize:17, borderRadius:0}} key={btn} onClick={buttonChange} value={btn}>{btn}</Button>
                ))
            }
            </Box>
            <Grid container sx={{px:"21%",py:"2%"}}>
                {
                    _DATA.currentData().map((book) => (
                            <Grid item xs={3} key={book.id}>
                                <Link onClick={() => handleRead(book)} to="/book">
                                  <Book url={book.photo.url} name={book.name} author={book.author} score={book.rating}/>
                                </Link>
                            </Grid>
                        ))  
                }           
            </Grid>
        </Box>
        <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
                className={classes.pagination} //  style
            />
        <Footer/>
    </div>
  )
}
