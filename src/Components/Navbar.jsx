import { AppBar, Badge, Box, Button, Input, InputBase, Stack, Toolbar, Typography, styled,Avatar,IconButton } from '@mui/material';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { MenuItem } from '@mui/base/MenuItem';
import React, { useState } from 'react'
import { DeveloperBoard,Mail,Search,Notifications, ArrowDropDown, Padding, Contactless } from '@mui/icons-material';

export default function Navbar(props) {

  const NavToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
    padding:'5px 2px 5px 2px'
  })
  const Searchbar=styled(Box)({
    width:'50%',
    display:'flex'
  })
  const Searchinput=styled(InputBase)({
    color:'black',
    backgroundColor:'white',
    padding:'5px 10px',
    borderRadius:'10px 0 0 10px',
    width:'70%'
  })
    
  const IconBar=styled(Box)({
    display:'flex',
    alignItems:'center'
  })
  const MenuDropdown=styled(MenuButton)({
    backgroundColor:'transparent',
    border:'none',
    cursor:'pointer'
  })
  const UserList=styled(Menu)({
    position:'relative',
    backgroundColor:'#1976d9',
    top:"10px",
    zIndex:2000000,
    padding:0
  })
  const MenuItemLi=styled('div')({
    color:'white',
    listStyle:'none',
    padding:"10px",
    width:"200px",
  ":hover":{
    backgroundColor:"#1976c3",
    cursor:'pointer'
  }
})
    
  return (
    <AppBar position='sticky'>
      <NavToolbar>
   
   <Typography variant='h6' component='h6' >
         <Contactless sx={{
          display:{
            xs:'block',
            sm:'block',
            md:'none',
            lg:'none',
          }
         }}/>
     <Typography variant='h6' component='h6'
     sx={{
      display:{
        xs:'none',
        sm:'none',
        md:'block',
        lg:'block',
      }
     }}>
        Connectbok
      </Typography>
      </Typography>
<Searchbar>
<Searchinput id="filled-basic" aria-label='Search' placeholder='Search...'/>
<Button variant='contained' color='warning' startIcon={<Search/>} sx={{borderRadius:'0 10px 10px 0 '}}><Typography sx={{display:{xs:'none',sm:'none',md:'block',lg:'block'}}}>Search</Typography></Button>
</Searchbar>
  <IconBar  spacing={2}>
    <IconButton>
          <Badge badgeContent='3' color='error' sx={{mx:1}}>
      <Mail />
    </Badge>
    </IconButton>

    <IconButton>
    <Badge badgeContent='2' color='error' sx={{mx:1}}>
      <Notifications/>
    </Badge>
    </IconButton>

    <Dropdown sx={{display:'flex'}}>
  <MenuDropdown><Avatar src={props.profile} sx={{mx:1}}/></MenuDropdown>
  <UserList disablePadding >
    <MenuItemLi >Profile</MenuItemLi>
    <MenuItemLi >
      Language settings
    </MenuItemLi>
    <MenuItemLi >Log out</MenuItemLi>
  </UserList>
</Dropdown>
    
  </IconBar>

      </NavToolbar>
      </AppBar>
  )
}
