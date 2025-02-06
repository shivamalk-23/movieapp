
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchbyid } from '../utils/fetchbyid'
import { Stack, Card, Box } from '@mui/material'

const MovieDetail = () => {
  const [movie, setmovie] = useState()
  const { movieid } = useParams()
  const [ratings, setratings] = useState()
  console.log(movieid)
  useEffect(() => {

    fetchbyid(`titles/${movieid}`)
      .then((data) => setmovie(data.results))


    fetchbyid(`titles/tt10209920/${movieid}`)
      .then((data) => setratings(data.results))









  }, [])






  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 2 }}>

    <h1 style={{ padding: 8 }}>{movie?.titleText?.text}</h1>
    
    <Box direction="row" sx={{ p: 2, flexDirection: { xs: 'column', md: 'row' }, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      
      <Card sx={{ maxWidth: { xs: '100%', md: '500px' }, margin: { xs: '0 auto', md: '0' } }}>
        <img style={{ objectFit: 'cover', width: '100%', height: 'auto', minWidth: '200px', minHeight: '250px' }} src={movie?.primaryImage?.url} />
      </Card>
  
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        
        <Card variant='outlined' sx={{ p: 2, maxWidth: '90%', maxHeight: 360, overflow: 'auto', m: { xs: 1, md: 5 }, position: 'relative', top: { xs: 20, md: 50 }, textAlign: 'center' }}>
          <h3>Average Rating : {ratings?.averageRating ? ratings?.averageRating : 'There is no rating for this Movie Yet'}</h3>
          <p style={{ margin: 15 }} >The Cast : {movie?.primaryImage?.caption?.plainText ? movie.primaryImage.caption.plainText : 'The Crew is not mentioned'}</p>
        </Card>
  
        <Card variant="outlined" sx={{ p: 5, m: { xs: 2, md: 5 }, maxWidth: '90%', maxHeight: 360, overflow: 'auto', textAlign: 'center' }}>
          <p>Release : {movie?.releaseDate ? `${movie?.releaseDate?.date}/` : "Release date is Not Available"}</p>
        </Card>
        
      </Box>
    </Box>
  </Box>
  
  )
}

export default MovieDetail
