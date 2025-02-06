import axios from "axios";
const BASE_URL='https://streaming-availability.p.rapidapi.com'
const options = {
  method: 'GET',
  url: BASE_URL ,
  params: {
    title: 'Topgun',
    country: 'us',
    show_type: 'all',
    output_language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};


export const search=async(url)=>{

   
    const{data}=await axios.get(`${BASE_URL}/${url}`,options)
   
  
    return data.result
  }
  