import React from 'react'
import { Box, Button, Typography, Card, CardActions, CardMedia, CardContent, ButtonGroup } from '@mui/material';
import Footer from '../components/Footer';
import reactStringReplace from 'react-string-replace';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import '../index.css';
import { useSelector } from 'react-redux';
import { plusCartItem, minusCartItem } from '../redux/actions/basket';
import { Link } from 'react-router-dom';

export default function Basket() {
    const { basket } = useSelector(({ basket }) => {
        return {
            basket: basket,
        }
    })

    // const onPlusItem = (id) => {
    //     useDispatch(plusCartItem(id));
    // };

    // const onMinusItem = (id) => {
    //     useDispatch(minusCartItem(id));
    // };

  return (
    <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        <Box sx={{px:"9%", display:"block", py:"2%"}}>
            <Typography sx={{color:"white", fontSize:30, textAlign: "center"}}>
                Basket
            </Typography>
            {/* <Typography sx={{color:"white", fontSize:22, mt:1}}>
                <label for="all-select">Select all</label>
            </Typography> */}
            <Card sx={{display:"block", px:"auto", backgroundColor:"inherit", my:1, border:"none", boxShadow: "none"}}>
                {basket.map((book) => ( 
                    <Box key={book.id} sx={{ position:"relative", pb:5, mt:1, display: "flex"}}>  
                        <CardActions sx={{display:"flex", py:2, justifyContent:"space-between"}}>   
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
                        {/* <ButtonGroup orientation="vertical" aria-label="vertical contained button group"
                                variant="contained"
                                sx={{height: "110px", position:"absolute", bottom: "110px", right: "20px", boxShadow: "none"}}>
                            <Button style={{width: "15px"}} onChange={onPlusItem}>
                                <ArrowDropUpOutlinedIcon style={{color: 'white',}}/>
                            </Button>
                            <input style={{width: '32px', textAlign: "center"}} type="number" max={5} min={0} value={4}/>
                            <Button style={{width: "15px"}} onChange={onMinusItem}>
                                <ArrowDropDownOutlinedIcon style={{color: 'white', }}/>
                            </Button>
                        </ButtonGroup> */}
                    </Box>  
                ))}
                { basket.length > 0 && (
                    <Link to="/checkout">
                    <Button style={{float: "right", width: "150px", backgroundColor: "white", color: "black", fontWeight: 500, px:2}}>
                        Checkout
                    </Button>
                </Link>
                )}
            </Card>
        </Box>
        <Footer/>
    </div>
  )
}
