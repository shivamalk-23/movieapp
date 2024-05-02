import React from 'react'
import { fetchupcomin } from './utils/fetchupcomin';
import { useState,useEffect } from 'react'
import {BrowserRouter, MemoryRouter,Routes,Route,} from "react-router-dom";
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import './assets/all.css'
import SearchFeed from './components/SearchFeed';

import MovieDetail from './components/MovieDetail';
import Movie2Detail from './components/Movie2Detail';

const App = () => {
const [list,setlist]=useState([])

useEffect(()=>{fetchupcomin(`titles/x/upcoming`)
  .then((data)=>setlist(data))

},[])



  return (
    <BrowserRouter>
      
      <Navbar/>
     
  

      <Routes>
        <Route path="/" element={<Feed list={list} />}/>
        <Route path="/search/:SearchTerm" element={<SearchFeed />}/>

        <Route path="/MovieDetail/:movieid" element={<MovieDetail/>}/>
        <Route path="/Movie2Detail/:movieid" element={<Movie2Detail/>}/>
        
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
