import React, { useState } from 'react';
import { Card,CardHeader,Avatar,CardMedia,CardActions,IconButton,CardContent, Typography, Stack,Box, styled, Button, Modal, InputBase } from '@mui/material';
import { Cancel, Collections, Comment, Send, Share, TagFaces, ThumbUpAlt } from '@mui/icons-material';
export default function Postcards(props) {
  const CardFooter=styled(Box)({
    padding:'20px 5px',
    display:'flex',
   width:'100%'
  })
  const ModalComment=styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  })
  const CommentBar=styled('div')({
    display:'flex',
    alignItems:'center',
    border:'1px solid grey',
    borderRadius:'30px',
    padding:'12px',
 width:'80%',
 margin:'0px 10px'    
  })
  const [open,setopen]=useState(false)
  const ModalOpen=()=>{
setopen(true)
  }
  const ModalClose=()=>{
setopen(false)
  }
  const CloseModal=()=>{
setopen(false)
  }
  return (
  <>
  <Card>
    <CardHeader avatar={
      <Avatar src={props.profile}>
      </Avatar>
    }
    title={props.name}
    subheader="20 minutes Ago"
    />
<CardContent>
  <Typography variant='p' color={'grey'}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, illum cumque odio veniam laborum facilis dolores odit eius ea dicta aliquam ipsum maiores saepe molestiae modi voluptatem? Voluptatem, pariatur nisi!
  </Typography>
</CardContent>
    <CardMedia
    component={'img'}
    image={props.post}
    />
    <CardActions >
      <CardFooter>
        {/* <Stack direction={'row'} alignItems={'center'}>
      <ThumbUpAlt/>
      <Typography color={'secondary'} px={2} component={'span'} variant='h6'>Like</Typography>
        </Stack> */}
      <Button  startIcon={<ThumbUpAlt/>} sx={{width:'30%',padding:'10px',fontSize:'20px'}}>Like</Button>
      <Button  startIcon={<Comment/>} color='secondary' sx={{width:'30%',padding:'10px',fontSize:'20px'}} onClick={ModalOpen}>Comment</Button>
      <Button  startIcon={<Share/>} color='warning' sx={{width:'30%',padding:'10px',fontSize:'20px'}}>Share</Button>
      </CardFooter>
    </CardActions>
  </Card>
  <ModalComment
  open={open}
  onClose={ModalClose}
  >
   <Card sx={{width:'500px'}}>
    <CardHeader title='Comment On this Post' action={
    <IconButton>
      <Cancel/>
  </IconButton>} 
  onClick={CloseModal}/>
  <CardContent>
  <Stack direction={'row'} alignItems={'center'}>
    <Avatar src={props.myprofile}/>
  <CommentBar>
      <InputBase placeholder='Write Here...' sx={{width:'80%'}}/>
<IconButton>
<TagFaces color='secondary'/>
</IconButton>
<IconButton>
<Collections color='error'/>
</IconButton>
    </CommentBar>
  </Stack>
<Button sx={{width:'100%',my:'20px',mx:'auto',borderRadius:'30px'}} color='primary' variant='contained' startIcon={<Send/>}>Post Comment</Button>
  </CardContent>
   </Card>
  </ModalComment>
      
        
          
  </>
  )
}

   
