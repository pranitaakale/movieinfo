import React from 'react'
import MovieNav from './Components/MovieNav'
import MovieContent from './Components/MovieContent'
import { MovieProvider } from './Contents/MovieContext'

function MovieAppManage() {
    return (
        <div>
           <MovieProvider>
                <MovieNav/>
                <MovieContent/>
            </MovieProvider> 
        </div>
    )
}

export default MovieAppManage
