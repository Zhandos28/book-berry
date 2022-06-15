import React from 'react'
import { Box, Button, Typography, Card, CardActions, CardMedia, CardContent, ButtonGroup } from '@mui/material';
import Footer from '../components/Footer';
import reactStringReplace from 'react-string-replace';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBook } from '../redux/actions/book';
import bookController from '../services/CRUD-services/Book-Controller';
import './account.css';


export default function Account() {
    const dispatch = useDispatch();
    const [data, setData] = React.useState();
    
    React.useEffect(() => {
        bookController.getMyBooks().then(r => {
            setData([...r]);
        });
    }, []);

    const handleRead = (book) => {
        dispatch(setBook(book));
    };

  return (
    <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Box sx={{px:"9%", display:"block", py:"2%"}}>
            <Typography sx={{color:"white", fontSize:30}}>
                My Account
            </Typography>
            <Typography sx={{color:"white", fontSize:22, mt:1}}>
                My reading books
            </Typography>
            <Card sx={{display:"block", px:"auto", backgroundColor:"inherit", my:1, border:"none", boxShadow: "none"}}>
                {
                    data && data.map((book) => ( 
                    <Box key={book.id} sx={{display:"flex", position:"relative", pb:5, mt:1}}>  
                        <CardActions sx={{display:"block", py:2}}>    
                            <CardMedia
                                component="img"
                                height="185"
                                image={book.photo.url}
                                alt={book.name}
                                sx={{width:140, mx:"auto", my:1}}
                            />
                        </CardActions>
                        <CardContent sx={{color:"white", fontSize:16, maxHeight:242, maxWidth:800, overflow:"hidden"}}>
                            <Typography sx={{fontSize:19}}>
                                The book "{book.name}" {book.author}
                            </Typography>
                            <div className='line-clamp'>{reactStringReplace(book.description, '<P>', (match, i) => (<br/>))}</div>
                        </CardContent>
                        <Button variant="contained" size="small" sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black', position:"absolute", bottom:85, right:20}}>
                            DISCOUNT
                        </Button>
                        <Link to="/book">
                            <Button onClick={() => handleRead(book)} variant="contained" size="small" sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black', position:"absolute", bottom:45, right:20}}>
                                READ
                            </Button>
                        </Link>
                    </Box>  
                   ))
                }
            </Card>
        </Box>
        <Footer/>
    </div>
  )
}
