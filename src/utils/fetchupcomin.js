import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
  params: {limit: '30'},
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }

};

export const fetchupcomin=async()=>{

   
  const{data}=await axios.get(`https://moviesdatabase.p.rapidapi.com/titles/x/upcoming`,options)
 

  return data.results
}

