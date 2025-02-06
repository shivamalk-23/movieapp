import axios from 'axios'
const BASE_URL='https://moviesdatabase.p.rapidapi.com'
const options = {
  method: 'GET',
  url: BASE_URL,
  
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
    'X-RapidAPI-Host':  'moviesdatabase.p.rapidapi.com'
  }

};

export const fetchbyid=async(url)=>{

   
  const{data}=await axios.get(`${BASE_URL}/${url}`,options)
 

  return data
}

