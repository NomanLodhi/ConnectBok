import { Box, Stack } from '@mui/material';
import React from 'react'
import Sidebar from './Components/Sidebar';
import Maincontent from './Components/Maincontent';
import Rightbar from './Components/Rightbar';
import Navbar from './Components/Navbar';
import ProfilePic from './Img/profile-pic.png';
import Friend1 from './Img/friend-1.png';
import Friend2 from './Img/friend-2.png';
import Friend3 from './Img/friend-3.png';
import Friend4 from './Img/friend-4.png';
import Friend5 from './Img/friend-5.png';
import Friend6 from './Img/friend-6.png';
import Post1 from './Img/Post-1.jpg';
import Post2 from './Img/Post-2.jpg';
import Post3 from './Img/Post-3.jpg';
import Post4 from './Img/Post-4.jpg';
import Post5 from './Img/Post-5.jpg';
import Post6 from './Img/Post-6.jpg';
import Ad1 from './Img/Ad-1.jpg';
import Ad2 from './Img/Ad-2.jpg';
export default function App() {
  return (
     <Box sx={{
      width:{
        xl:'1300px'
      },
      mx:{
        lg:0,
        xl:'auto',
        sm:0,
        md:0
      }
     }}>
<Navbar profile={ProfilePic}/>      
 <Stack direction="row">
<Sidebar friend1={Friend1} friend2={Friend2} friend3={Friend3} friend4={Friend4} />
<Maincontent post1={Post1}  profile1={Friend1} profile2={Friend2} profile3={Friend3} profile4={Friend4} profile5={Friend5} profile6={Friend6} myprofile={ProfilePic} post2={Post2} post3={Post3} post4={Post4} post5={Post5} post6={Post6}/>
<Rightbar Ad1={Ad1} Ad2={Ad2} post1={Post1} post2={Post2} post3={Post3} post4={Post4} post5={Post5} post6={Post6}/>
 </Stack>
    </Box>
       )
       
      }






