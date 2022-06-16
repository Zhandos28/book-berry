import React from 'react'
import { Box, Button, Typography, Card, CardActions, CardMedia, CardContent, ButtonGroup } from '@mui/material';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setBasket } from '../redux/actions/basket';


export default function BookPage() {
    const { data } = useSelector(({ book }) => {
        return {
            data: book.item,
        }
    })

    const reactStringReplace = require('react-string-replace');
    const comments = [
        {
            id:"1",
            author: "Arman",
            image: "https://media.istockphoto.com/vectors/young-man-anime-style-character-vector-id1192117014?k=20&m=1192117014&s=170667a&w=0&h=cijWRuYrAzCSYrx9WthFxiaQBPAYfrFiP9t9WLU3e7M=",
            comment: "Perfect book",
            date: "19.03.2020 14.15.54"
        },
        {
            id:"2",
            author: "Aisulu",
            image: "https://media.istockphoto.com/vectors/young-man-anime-style-character-vector-id1192117014?k=20&m=1192117014&s=170667a&w=0&h=cijWRuYrAzCSYrx9WthFxiaQBPAYfrFiP9t9WLU3e7M=",
            comment: "Cool book",
            date: "19.03.2020 14.15.54"
        }
    ]

    React.useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    const dispatch = useDispatch();
    const handleBasket = () => {
        dispatch(setBasket(data));
    };

  return (
    <div style={{backgroundImage:"linear-gradient(to right, #00C2FF, #019CF3)"}}>
        {data ?
        (<>   
            <Box sx={{px:"9%", display:"block", py:"2%"}}>
                <Typography sx={{color:"white", fontSize:22}}>
                    The book "{data.name}" {data.author}
                </Typography>
                <Card sx={{display:"flex", px:"auto", backgroundColor:"inherit", my:"2%", border:"none", boxShadow: "none"}}>
                    <CardActions sx={{display:"block", py:2}}>    
                        <CardMedia
                            component="img"
                            height="180"
                            image={data.photo.url}
                            alt={data.title}
                            sx={{width:128, mx:"auto", my:1}}
                        />
                        {/* {
                            buttons.map((btn) =>( */}
                                <ButtonGroup
                                    orientation="vertical"
                                    aria-label="vertical contained button group"
                                    variant="contained"
                                    // key={btn}
                                >
                                    <Button onClick={handleBasket}  variant="contained" size="small" sx={{backgroundColor:"white", borderRadius:1, width:128, color:'black'}}>
                                        TO BASKET
                                    </Button>
                                </ButtonGroup>

                            {/* ))
                        } */}
                    </CardActions>
                    <CardContent sx={{color:"white", fontSize:16}}>
                        {reactStringReplace(data.description, '<P>', (match, i) => (
                            <br/>
                        ))}
                    </CardContent>
                </Card>
                <Box>
                    <Typography sx={{fontSize:18, color:"white", fontWeight:500}}>
                        Characteristics
                    </Typography>
                    <Typography sx={{fontSize:14, color:"white"}}>
                        Age limit: {data.ageLimit}+
                    </Typography>
                    <Typography sx={{fontSize:14, color:"white"}}>
                        Publishers: {data.publisher.firstName + " " + data.publisher.lastName}
                    </Typography>
                    <Typography sx={{fontSize:14, color:"white"}}>
                        Authors: {data.author}
                    </Typography>
                    <Typography sx={{fontSize:14, color:"white"}}>
                        Series: {data.categories}
                    </Typography>
                    <Typography sx={{fontSize:14, color:"white"}}>
                        Number of pages: {data.pages}
                    </Typography>
                    <Typography sx={{fontSize:14, color:"white"}}>
                        Date of the last draw: {data.year}
                    </Typography>
                </Box>
                <Box sx={{my:2}}>
                    <Typography sx={{fontSize:18, color:"white", fontWeight:500}}>
                        Book Reviews
                    </Typography>
                    {
                        comments.map((data) => (
                            <Box sx={{display:"flex", justifyContent:"space-between", width:300, my:"1%"}}>
                                <img src={data.image} style={{width:"70px", height:"70px"}}/>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{color:"white", fontSize:16}}>{data.author}</Typography>
                                    <Typography sx={{color:"white", my:1, fontSize:14}}>{data.comment}</Typography>
                                </Box>
                                <Typography sx={{color:"white", fontSize:13}}>
                                    {data.date}
                                </Typography>
                            </Box>
                        )) 
                    }
                </Box>
            </Box>
            <Footer/>
        </>
        ) : <div style={{height: '100vh'}}></div>}
    </div>
  )
}
