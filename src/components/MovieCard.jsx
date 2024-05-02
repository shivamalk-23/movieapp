import React from 'react'
import {Card} from '@mui/material'
import {Link} from 'react-router-dom'
const MovieCard = ({list}) => {
  return (
    
        
      <div style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap"}}>
      { list.map((data)=>(


      data?.titleType?.text ==="Movie" ? 
      <Link key={data} to={`/MovieDetail/${data.id}`}>
      <Card sx={{width:220,m:2,display:'flex',flexDirection:'column'}} d >
      <h4 style={{margin:"10px"}}>{data?.titleText?.text.length>25 ?`${data?.titleText?.text.slice(0,22)}...`:data?.titleText?.text}</h4>
      <img style={{margin:"10px",objectFit:'cover'}} src={data?.primaryImage?.url}  width="200px" height="300px" ></img>
      </Card>
      </Link > : console.log('not movie')
       
      )
      
    )}
    </div>
  

  )
}

export default MovieCard
