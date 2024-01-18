import { Box,List,ListItem,ListItemButton,ListItemIcon,ListItemText,Divider,Badge,Avatar, ListItemAvatar, Typography,Stack } from '@mui/material';
import { Inbox,Drafts, Home, Person, Notifications, People, Save } from '@mui/icons-material';
import React from 'react'

export default function Sidebar(props) {
  return (
    <Box
    //  bgcolor='blue' 
     flex={2}
      p={3}
      sx={
        {display:
        {xs:'none',
        sm:'none',
        md:'block',
        lg:'block',
        },
         }
         }>
     
 <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Badge badgeContent={3} color='error'>
                <People />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Friend Requests" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Save />
              </ListItemIcon>
              <ListItemText primary="Save Items" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </List>
      
      <Divider />
   
        <List>
              <ListItemText secondary='Active Friends' />
          <ListItem disablePadding sx={{marginTop:'10px'}}>
            <ListItemButton>
            <ListItemAvatar>
              <Badge variant='dot'  anchorOrigin={{vertical: 'bottom', horizontal: 'right', }} color='success'>
              <Avatar src={props.friend1}  mx={3} />
              </Badge>
              </ListItemAvatar>
           <Stack direction="column">
           <ListItemText primary="Daud Karim" />
              <ListItemText secondary="Active" />
           </Stack>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemAvatar>
              <Badge variant='dot'  anchorOrigin={{vertical: 'bottom', horizontal: 'right', }} color='success'>
              <Avatar src={props.friend2}  mx={3} />
              </Badge>
              </ListItemAvatar>
           <Stack direction="column">
           <ListItemText primary="Muhammad Saleh" />
              <ListItemText secondary="Active" />
           </Stack>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
             
              <ListItemAvatar>
              <Badge variant='dot'  anchorOrigin={{vertical: 'bottom', horizontal: 'right', }} color='success'>
              <Avatar src={props.friend3}  mx={3} />
              </Badge>
              </ListItemAvatar>
           <Stack direction="column">
           <ListItemText primary="Abdul Rahman" />
              <ListItemText secondary="Active" />
           </Stack>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
            <ListItemAvatar>
              <Badge variant='dot'  anchorOrigin={{vertical: 'bottom', horizontal: 'right', }} color='success'>
              <Avatar src={props.friend4}  mx={3} />
              </Badge>
              </ListItemAvatar>
           <Stack direction="column">
           <ListItemText primary="Farishta Qayyum" />
              <ListItemText secondary="Active" />
           </Stack>
            </ListItemButton>
          </ListItem>
        </List>
   </Box>
  )
}
