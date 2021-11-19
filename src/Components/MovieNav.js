import React from 'react'
import { Link } from "react-router-dom"
function MovieNav() {
    return (
        <div className="movie-nav">
            <div className="lnav">
                <div className="nav-head">
                    <h1>MovieInfo</h1>
                </div>
            </div>
            <div className="rnav">
                <a><Link to="/credits">Credits</Link></a>
            </div>
        </div>
    )
}

export default MovieNav
