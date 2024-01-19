import { Box } from '@mui/material'
import React from 'react'
import Postcards from './Postcards'
export default function Maincontent(props) {
  return (
    <Box flex={5} sx={{
      p:{
xs:0,
sm:0,
md:0,
lg:3,
xl:3,
      }
    }} mx={0}>
      <Postcards post={props.post1} profile={props.profile1} myprofile={props.myprofile} name="Daud Karim"/>
      <Postcards post={props.post2} profile={props.profile2} myprofile={props.myprofile} name="Muhammad Saleh"/>
      <Postcards post={props.post3} profile={props.profile3} myprofile={props.myprofile} name="Abdul Rahman"/>
      <Postcards post={props.post4} profile={props.profile4} myprofile={props.myprofile} name="Farishta Qayyum"/>
      <Postcards post={props.post5} profile={props.profile5} myprofile={props.myprofile} name="Jessica Robert"/>
      <Postcards post={props.post6} profile={props.profile6} myprofile={props.myprofile} name="David Burns"/>
    </Box>
  )
}
