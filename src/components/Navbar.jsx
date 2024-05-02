import React from 'react'
import {Stack,Box,Container} from '@mui/material'
import {Link} from 'react-router-dom'
import img from '../assets/Group.svg'
import '../assets/Navbar.css'
import SearchBar from './SearchBar'
import {Button} from '@mui/material'
const Navbar = () => {
  return (
  
      <Stack direction="row" sx={{p:2,bgcolor:'#2a2b2b',position:'sticky',top:0,display:'flex',justifyContent:'space-between', }} >
     
        <Link to='/'>
          <img src={img} width="70px" />
          </Link>
        
      <Link to="/Random/movieid">
      
          </Link>
          <SearchBar/>
          
      </Stack>
     
  )
}

export default Navbar
