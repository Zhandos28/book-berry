import React from 'react'
import { Box, Button, Typography, Card, CardActions, CardMedia, CardContent, TextField, Alert } from '@mui/material';
import Footer from '../components/Footer';
import reactStringReplace from 'react-string-replace';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBook } from '../redux/actions/book';
import bookController from '../services/CRUD-services/Book-Controller';
import './account.css';
import AddIcon from '@mui/icons-material/Add';


export default function Account() {
    const dispatch = useDispatch();
    const [data, setData] = React.useState();
    const [discount, setDiscount] = React.useState(false);
    const [parcent, setParcent] = React.useState(0);
    const [status, setStatus] = React.useState();
    
    React.useEffect(() => {
        bookController.getMyBooks().then(r => {
            setData([...r]);
        });
    }, []);

    const handleRead = (book) => {
        dispatch(setBook(book));
    };

    const handleDiscount = (id) => {
        if (discount === id) {
            setDiscount(null);
        }
        else setDiscount(id);
    };

    const submitDiscount = (book) => {
        if (discount === book.id) {
            bookController.postDiscount(book.id, parcent).then(r => {
                if (r===200) {
                    setStatus(
                        <Alert severity="success" sx={{backgroundColor:"white", borderRadius:1, width:300, color:'black', position:"absolute", top: 50, right:583}}>This is a success alert — check it out!</Alert>
                    )
                }
                else {
                    setStatus(
                        <Alert severity="warning" sx={{backgroundColor:"white", borderRadius:1, width:300, color:'black', position:"absolute", top: 50, right:583}}>This is a warning alert — check it out!</Alert>
                    )
                }
            })
            setDiscount(null);
        }
    };

    
  return (
    <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)", position:"relative"}}>
        {status}
        <Box sx={{px:"9%", display:"block", py:"2%"}}>
            <Typography sx={{color:"white", fontSize:30}}>
                My Account
            </Typography>
            <Typography sx={{color:"white", fontSize:22, mt:1}}>
                My reading books
            </Typography>
            <Card sx={{display:"block", px:"auto", backgroundColor:"inherit", my:1, border:"none", boxShadow: "none"}}>
                {
                    data ? data.map((book) => ( 
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
                        <TextField
                            value={parcent}
                            onChange={(e) => setParcent(e.target.value)}
                            max
                            id="outlined-number"
                            type="number"
                            InputProps={{ inputProps: { min: 1, max: 100 } }}
                            label="PARCENT"
                            size="small"
                            className={`${discount === book.id ? "showDiscount" : "discount"}`}
                            sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black', position:"absolute", bottom:165, right:20}}
                        />
                        <Button className={`${discount === book.id ? "showDiscount" : "discount"}`} onClick={() => submitDiscount(book)} variant="contained" size="small" sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black', position:"absolute", bottom:125, right: 20}}>
                            SUBMIT
                        </Button>
                        <Button onClick={() => handleDiscount(book.id)} variant="contained" size="small" sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black', position:"absolute", bottom:85, right:20}}>
                            DISCOUNT
                        </Button>
                        <Link to="/book">
                            <Button onClick={() => handleRead(book)} variant="contained" size="small" sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black', position:"absolute", bottom:45, right:20}}>
                                READ
                            </Button>
                        </Link>
                    </Box>  
                   )) : <div style={{height: '100vh'}}></div>
                }

                <Link to="/book/post">
                    <Button variant="contained" size="small" sx={{backgroundColor: "white", borderRadius:1, width:20, color:'black', position:"fixed", bottom:45, right:20,}}>
                        <AddIcon sx={{color: 'blue', fontSize: "45px"}}/>
                    </Button>
                </Link>
            </Card>
        </Box>
        <Footer/>
    </div>
  )
}
