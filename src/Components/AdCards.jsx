import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function AdCards(props) {
  return (
    <div>
<Card >
  <CardContent sx={{display:'flex',flexDirection:'row'}}>
    <CardMedia
    src={props.Adpic}
    component={'img'}
    sx={{width:'40%',borderRadius:'5px'}}/>
    <Typography variant='p' px='10px' color={'grey'} sx={{fontSize:'15px'}}>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, eligendi.
    </Typography>
</CardContent>
    </Card>      
    </div>
  )
}
