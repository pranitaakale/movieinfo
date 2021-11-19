import React, { useState, useContext, useParams, generatePath } from 'react'
import { img_SIZE, imgURL, reqURL , Loader} from '../Contents/MovieApiVariables'
import { MovieApiContext } from '../Contents/MovieContext'
import { Link } from "react-router-dom"

const MovieTabContent =(index) => {
    const {forDiscover, forLatest, forNowPlaying, forPopular, forTopRated, forUpcoming} = useContext(MovieApiContext)
    const [discover, setDiscover] = forDiscover
    const [latest, setLatest] = forLatest
    const [nowPlaying, setNowPlaying] = forNowPlaying
    const [popular, setPopular] = forPopular
    const [topRated, setTopRated] = forTopRated
    const [upcoming, setUpcoming] = forUpcoming
    var result
    switch(index){
        case 1: result = nowPlaying.results
        break;
        case 2: result = popular.results
        break;
        case 3: result = topRated.results
        break;
        case 4: result = upcoming.results
        break;
        case 5: result = latest.results
        break;
        
        default: result = discover.results
        break;
    }
    return(
        <div className="tab-content">
            {result? 
                result.map(item =>(   
                    <div className="movie-content-item" key={item.id}>   
                        <Link to='/details' state={{ id: item.id }} >More</Link>
                        <img src={imgURL.concat(img_SIZE("154"),item.poster_path)} />
                        <h3>{item.title}</h3> 
                    </div>                               
                ))
                :
                <Loader/>
            } 
        </div>
    )
}
function MovieContent() {
    
    const [state, setState] = useState(0)
    const [details, setDetails] = useState([])
    const [searchVal, setSearchVal] = useState('')
    const toggleTab = (index) =>{
        setState(index)
    }
    const searchInput = (e) => {
        e.preventDefault()
        setSearchVal(e.target.value)
    }
    const searchValue = (e) => {
        e.preventDefault()
        setState(6)
        fetch(reqURL("search", searchVal))
        .then(response => response.json())
        .then(data => {
            setDetails(data)
        }
      )
    }
    return (
        <div className="content">
            <div className="left-content">
                <div className="search card-strip">
                <input type="text" onChange={searchInput} placeholder="Search Movie" />
                <button onClick={searchValue}>Go</button>
                </div>
                <div className="tab-head">
                    {/* <button className="card-strip" onClick={() => toggleTab(1)}>Latest</button> */}
                    <button className={state===2? 'active card-strip': 'card-strip'} onClick={() => toggleTab(2)}><p>Now Playing</p></button>
                    <button className={state===3? 'active card-strip': 'card-strip'} onClick={() => toggleTab(3)}><p>Popular</p></button>
                    <button className={state===4? 'active card-strip': 'card-strip'} onClick={() => toggleTab(4)}><p>Top Rated</p></button>
                    <button className={state===5? 'active card-strip': 'card-strip'} onClick={() => toggleTab(5)}><p>Upcoming</p></button>
                </div>
            </div>
            <div className="right-content">
                <div className="tabs">
                    {state ===1 ? MovieTabContent(5) :
                     state ===2 ? MovieTabContent(1) :
                     state ===3 ? MovieTabContent(2) :
                     state ===4 ? MovieTabContent(3) :
                     state ===5 ? MovieTabContent(4) :
                     state ===0 ? MovieTabContent() :
                     <div className="tab-content">
                        {details.results? 
                            details.results.map(item =>(   
                            <div className="movie-content-item" key={item.id}>   
                                <Link to="/details" state={{ id: item.id }} >More</Link>
                                <img src={imgURL.concat(img_SIZE("154"),item.poster_path)} />
                                <h3>{item.title}</h3> 
                            </div>                               
                            ))
                            :
                            <Loader/>
                        } 
                    </div>
                        }
                </div>
            </div>
        </div>
    )
}

export default MovieContent
