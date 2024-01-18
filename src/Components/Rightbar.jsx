import { Box, ImageList, ImageListItem, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import AdCards from './AdCards'

export default function Rightbar(props) {
  return (
    <Box  flex={3} p={3} sx={{
        display:{
            xs:'none',
            sm:"none",
            md:'block',
            lg:'block'
        }
    }}>
      <List>
        <ListItemText secondary='Sponsred Ads'/>
        <ListItemButton>
      <AdCards Adpic={props.Ad1}/>
        </ListItemButton>
        <ListItemButton>
      <AdCards Adpic={props.Ad2}/>
        </ListItemButton>
<ListItemText secondary='Recent Posts'/>
      <ImageList sx={{width:'100%', my:3}} cols={3}>
<ImageListItem>
  <img src={props.post1}/>
</ImageListItem>
<ImageListItem>
  <img src={props.post2}/>
</ImageListItem>
<ImageListItem>
  <img src={props.post3}/>
</ImageListItem>
<ImageListItem>
  <img src={props.post4}/>
</ImageListItem>
<ImageListItem>
  <img src={props.post5}/>
</ImageListItem>
<ImageListItem>
  <img src={props.post6}/>
</ImageListItem>
      </ImageList>
      </List>
    </Box>
   

  )
}
