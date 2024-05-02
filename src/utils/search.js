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
    'X-RapidAPI-Key': 'c7a232a1bdmshd13e1c66cbe4376p1a319bjsn47fb38b36bca',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};


export const search=async(url)=>{

   
    const{data}=await axios.get(`${BASE_URL}/${url}`,options)
   
  
    return data.result
  }
  