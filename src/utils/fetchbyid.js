import axios from 'axios'
const BASE_URL='https://moviesdatabase.p.rapidapi.com'
const options = {
  method: 'GET',
  url: BASE_URL,
  
  headers: {
    'X-RapidAPI-Key': 'c7a232a1bdmshd13e1c66cbe4376p1a319bjsn47fb38b36bca',
    'X-RapidAPI-Host':  'moviesdatabase.p.rapidapi.com'
  }

};

export const fetchbyid=async(url)=>{

   
  const{data}=await axios.get(`${BASE_URL}/${url}`,options)
 

  return data
}

