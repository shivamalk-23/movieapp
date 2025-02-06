/* eslint-disable react/prop-types */

import { Card, Box } from '@mui/material'
import { Link } from 'react-router-dom'
const MovieCard = ({ list }) => {
  return (


    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
      {list.map((data) => (


        <Card key={data} sx={{ my:2,mx:1,width: { xs: 150,md:'200px', lg: 250 },}} >
          <Link key={data} style={{ textDecoration: 'none',display:'flex',justifyContent:'center',alignItems:'center' }} to={`/MovieDetail/${data.id}`}>
            <Box sx={{ m: { xs: 1, lg: 2 }, display: 'flex', flexDirection: 'column' }}>
              <h4 style={{ margin: "10px", textDecoration: 'none' }}>
                {data?.titleText?.text.length > 25 ? `${data?.titleText?.text.slice(0, 22)}...` : data?.titleText?.text}
              </h4>
              <img  style={{ margin: "10px", objectFit: 'cover' }} src={data?.primaryImage?.url} width="200px" height="300px" />
            </Box>
          </Link>
        </Card>

      )

      )}
    </div>


  )
}

export default MovieCard
