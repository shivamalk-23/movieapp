import React from 'react'
import { Typography } from '@mui/material'
const RandomSearch = ({id="Top Gun"}) => {
  return (
    <div>
        <Typography sx={{m:3,fontSize:{sm:20,lg:40}}}>
    The Universe Has  <span style={{color:'red'}}>Choosen  {id} </span>  For You 
    </Typography>
    </div>
  )
}

export default RandomSearch
