/* eslint-disable react/prop-types */

import {Typography,} from '@mui/material'

import MovieCard from './FeedCard'

const Feed = ({list}) => {
 console.log(list)
  return (
    <div >
      
    <Typography sx={{m:3,fontSize:{sm:20,lg:40}}}>
      New Movies <span style={{color:'red'}}>And </span> TV Shows <span style={{color:'red'}}>For you</span>
    </Typography>
   
<MovieCard list={list}/>
    </div>
  )
}

export default Feed
