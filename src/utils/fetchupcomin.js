import axios from 'axios'
let news=[]
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
  params: {limit: '30'},
  headers: {
    'X-RapidAPI-Key': 'c7a232a1bdmshd13e1c66cbe4376p1a319bjsn47fb38b36bca',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }

};

export const fetchupcomin=async(url)=>{

   
  const{data}=await axios.get(`https://moviesdatabase.p.rapidapi.com/titles/x/upcoming`,options)
 

  return data.results
}

