import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { search } from '../utils/search'
import { Typography } from '@mui/material'
import { useState,useEffect } from 'react'
import Movie2Card from './Movie2Card'
const SearchFeed = () => {
  const [list,setlist]=useState()
  const {SearchTerm}=useParams()

  useEffect(()=>{

 search(`search/title?title=${SearchTerm}&country=us&show_type=movie&output_language=en`)
 .then((data)=>(setlist(data)))

  },[SearchTerm])

  return (
    <div>
   
      <Typography sx={{m:3,fontSize:{sm:20,lg:40}}}>
     You Searched for  <span style={{color:'red'}}>{SearchTerm}</span>
    </Typography>
    
    {list && <Movie2Card list={list}/>}
    </div>
  )
}

export default SearchFeed
