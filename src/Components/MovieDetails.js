import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import { img_SIZE, imgURL, reqURL, Loader } from '../Contents/MovieApiVariables'

const MovieVideos = (props) => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch(reqURL("/videos", props.id))
        .then(response => response.json())
        .then(data => {
        console.log(data)
        setVideos(data.results)
    }
    )
    }, [])
return(
    <div className="videos">
        {videos?
        videos.map( item => (
            <>
            <iframe width="350" height="300" src={`https://www.youtube.com/embed/${item.key}`}></iframe>
            {console.log(videos.indexOf(item))}</>
        )):
        <Loader/>}
    </div>
)
}
const MovieCast = (props) => {
    const [credits, setCredits] = useState([])

    useEffect(() => {

        fetch(reqURL("/credits", props.credit_id))
        .then(response => response.json())
        .then(data => {
        setCredits(data)
    }
    )
   
    }, [])
    return(
        <div className="cast-content">
            {credits.cast? 
                credits.cast.map(item =>(  
                    item.profile_path? 
                    <div className="cast-content-item" >   
                        <img src={imgURL.concat(img_SIZE("92"),item.profile_path)} />
                        <h3>{item.name}</h3>
                        <h5>{item.character}</h5> 
                        <h5>({item.known_for_department})</h5> 
                    </div> :null                              
                ))
                :
                <Loader/>
            } 
        </div>
    )
}
const MovieOverview = (props) =>{
    return(
        <div>
            <div className="details-genre">
                {props.genres?
                    props.genres.map(item => ( <p className="genre-item">{item.name}</p>)):null}     
            </div>
            
            <div className="details-overview">
                <p>{props.overview}</p>
            </div>
            
            <div className="details-more-items">
                <div className="details-vote">
                    <h4>Vote Average:</h4>
                    <button>{props.vote_average}</button>
                </div>
                
                <div className="details-items">
                    <div className="details-status">
                        <h4>Status: </h4>
                        <p>{props.status}</p>
                    </div>
                    <div className="details-release-date">
                        <h4>Release Date:</h4>
                        <p>{props.release_date}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
function MovieDetails() {
    const location = useLocation()
    const { id } = location.state
    const [details, setDetails] = useState()
    const [state, setState] = useState(1)

    useEffect(() => {
    const timeout = setTimeout(() =>{
    fetch(reqURL("movie/", id))
    .then(response => response.json())
    .then(data => {
        setDetails(data)
    })
    },1000)
    return () => {
        clearTimeout(timeout)
    }
    }, [])

    const toggleTab = (index) =>{
        setState(index)
    }
    return (
        <>
        <div className="movie-details">
            <button className="back-btn"><a><Link to="/" >Back</Link></a></button>
            {details?             
                <div className="details-container"> 
                    <div className="details-img">
                        <img src={imgURL.concat(img_SIZE("342"),details.poster_path)} />
                        <div className="details-title">
                            <h4>{details.title}</h4>
                        </div>
                    </div>
                    
                    <div className="details">
                        <hr/>
                        <div className="tab-btn">
                            <button className={state === 1? "card-strip active": "card-strip"} onClick={() => toggleTab(1)}>Overview</button>
                            <button className={state === 2? "card-strip active": "card-strip"} onClick={() => toggleTab(2)}>Cast</button>
                            <button className={state === 3? "card-strip active": "card-strip"} onClick={() => toggleTab(3)}>Preview</button>
                        </div><hr/>
                        <div className="tab-content" >
                             {state===1? <MovieOverview overview={details.overview} genres={details.genres } vote_average={details.vote_average} status={details.status} release_date={details.release_date}/>
                             :
                             state === 2 ? <MovieCast credit_id={id}/>
                            :
                             state === 3 ? <MovieVideos id={id}/>
                             :null}   
                        </div>
                    </div> 
                </div> 
                :<Loader/>
            } 
        </div>
        </>
    )
}

export default MovieDetails
