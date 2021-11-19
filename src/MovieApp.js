import React from 'react'
import './MovieApp.css'
import MovieNav from './Components/MovieNav'
import MovieContent from './Components/MovieContent'
import { MovieProvider } from './Contents/MovieContext'
import MovieDetails from './Components/MovieDetails'
import MovieAppCredits from './Components/MovieAppCredits'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

// https://ui.dev/react-router-pass-props-to-link/
const MovieAppManage = () => {
    return (
        <div>
           <MovieProvider>
                <MovieNav/>
                <MovieContent/>
            </MovieProvider>
        </div>
    )
}


function MovieApp() {
    return (
        <div>
            <Router>
                <Routes basename='/movieinfo'>
                <Route path="/" element={<MovieAppManage/>}>  
               </Route>
               <Route path="/details" element={<MovieDetails/>} ></Route> 
               <Route path="/credits" element={<MovieAppCredits/>} ></Route> 
               </Routes>
            </Router> 
        </div>
    )
}

export default MovieApp
