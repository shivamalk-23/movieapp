import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { fetchbyid } from '../utils/fetchbyid'
import {Stack,Card} from '@mui/material'

const MovieDetail = () => {
  const [movie,setmovie] =useState()
  const{movieid}=useParams()
  const [ratings,setratings]=useState()
console.log(movieid)
  useEffect(()=>{

fetchbyid(`titles/${movieid}`)
.then((data)=>setmovie(data.results))


fetchbyid(`titles/tt10209920/${movieid}`)
.then((data)=>setratings(data.results))









  },[])





  
  return (
    <Stack sx={{display:'flex', justifyContent:'center',alignItems:'center'}}>
     
     <h1 style={{padding:8}}>{movie?.titleText?.text}</h1>
     <Stack direction="row" sx={{p:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Card>    
             <img style={{objectFit:'cover',maxWidth:'500px',height:'550px'}}src={movie?.primaryImage?.url} />
           </Card>
           <Stack >
              <Card variant='outlined' sx={{p:2,maxWidth:'30%',maxHeight:360,overflow:'auto' ,m:5,position:'relative' ,top:50}}>
               <h3>Average Rating : { ratings?.averageRating ?   ratings?.averageRating:'There is no rating for this Movie Yet'}</h3>
               <p style={{margin:15}} >The Cast : {movie?.primaryImage?.caption?.plainText ? movie.primaryImage.caption.plainText:'The Crew is not mentioned'}</p>
               </Card>
              <Card variant="outlined"sx={{p:5,m:5,maxWidth:'20%',maxHeight:360,overflow:'auto' }}>
                <p>Release :{movie?.releaseDate===undefined ? `${movie?.releaseDate?.date}/`:"Release date is Not Available"}</p>
              </Card>
         </Stack>
       </Stack>
    </Stack>
  )
}

export default MovieDetail
