import React from 'react'
import { Link } from 'react-router-dom'

function MovieAppCredits() {
    return (
        <div className="credits">
            <button className="back-btn"><a><Link to="/" >Back</Link></a></button>
            <h2>Credits</h2>
            <h4>The source of all movie related data is supplied by TMDB.</h4>
            <a href="https://www.themoviedb.org/"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"/></a>
            <h4>MovieInfo uses the TMDB API but is not endorsed or certified by TMDB.</h4>
        </div>
    )
}

export default MovieAppCredits
