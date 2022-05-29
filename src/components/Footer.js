import React from 'react'
import {Box, Typography} from '@mui/material'
import footerImg from '../assets/footer.png'

export default function () {
  return (
    <Box sx={{backgroundColor:"white", py:"2%", px:"12%", display:{md:"flex", sx:"block"}, borderTop: "1px solid #bdbdbd",justifyContent:"space-between"}}>
        <Box sx={{display:"block"}}>
            <Typography sx={{fontWeight: 600, mt:1, fontSize:18}}>
                Classes
            </Typography>
            <Typography sx={{fontWeight: 500, mt:1, fontSize:16}}>
                For children
            </Typography>
            <Typography sx={{fontWeight: 500, mt:1, fontSize:16}}>
                For adults
            </Typography>
            <Typography sx={{fontWeight: 500, mt:1, fontSize:16}}>
                Enroll
            </Typography>
        </Box>
        <Box sx={{display:"block"}}>
            <Typography sx={{fontWeight: 600, mt:1, fontSize:18}}>
                Upcoming events
            </Typography>
            <Typography sx={{fontWeight: 500, mt:1, fontSize:16}}>
                11/08 Black Friday
            </Typography>
            <Typography sx={{fontWeight: 500, mt:1, fontSize:16}}>
                11/08 Abay's day
            </Typography>
            <Typography sx={{fontWeight: 500, mt:1, fontSize:16}}>
                11/08 Guitar night
            </Typography>
        </Box>
        <Box sx={{display:"block"}}>
            <Typography sx={{fontWeight: 600, mt:1, fontSize:18}}>
                PCM Blog 
            </Typography>
            <Box sx={{display:"flex", py:"2%"}}>
                <img src={footerImg} style={{borderRadius:8, height:"80px", mt:"5px"}}/>
                <Typography sx={{maxWidth:{xs:"none",md:300}, ml:4,fontSize:15}}>
                A student is the SDU string class went on field trip on the Disney concert hall last Wednesday.It was anazing experience.  We listened to ...
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}
