import React from 'react'
import {Card} from '@mui/material'
import {Link} from 'react-router-dom'

import { useState,useEffect } from 'react'

const Movie2Card = ({list}) => {

  console.log(list)
    
  return (
    
        
      <div style={{display:"flex", flexDirection:'column',textDecoration:'none'}}>
  { list  && list.map((data)=>(
    <Link to={`/Movie2Detail/${data?.imdbId}`} style={{textDecoration:'none'}}>
    <Card sx={{width:'70%',maxheight:'200px',m:2,display:'flex',flexDirection:'column',textDecoration:'none'}} d >
    <h4 style={{margin:"10px",textDecoration:'none'}}>{data?.title.length>25 ?`${data?.title.slice(0,22)}...`:data?.title}</h4>
      <p style={{margin:'20px',textDecoration:'none'}}>{data?.overview ==='' ? 'no overview is available':data?.overview}</p>
    <h3 style={{alignSelf:'self-end',justifySelf:"flex-end",position:'relative',padding:10}} > released on:{data?.year}</h3>
    </Card>
    </Link >
  ))}
    </div>
  

  )
}

export default Movie2Card