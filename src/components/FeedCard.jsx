/* eslint-disable react/prop-types */

import { Card, Box } from '@mui/material'
import { Link } from 'react-router-dom'
const MovieCard = ({ list }) => {
  return (


    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      {list.map((data) => (


<Card key={data} sx={{ my: 2, mx: 1, width: { xs: 150, md: '200px', lg: 250 } }}>
<Link key={data} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }} to={`/MovieDetail/${data.id}`}>
  <Box sx={{ m: { xs: 1, lg: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h4 style={{ margin: "10px", textDecoration: 'none', textAlign: 'center' }}>
      {data?.titleText?.text.length > 25 ? `${data?.titleText?.text.slice(0, 22)}...` : data?.titleText?.text}
    </h4>
    <img
      style={{
        margin: "10px",
        objectFit: 'fill', 
        borderRadius: '8px',
      }}
      src={data?.primaryImage?.url}
      alt={data?.titleText?.text} 
      width="100%" 
      height="auto" 
    />
  </Box>
</Link>
</Card>


      )

      )}
    </div>


  )
}

export default MovieCard
