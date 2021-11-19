import React, { createContext, useState, useEffect } from 'react'
import { reqURL } from './MovieApiVariables';

export const MovieApiContext = createContext();

export const MovieProvider = (props) => {
    const [discover, setDiscover] = useState([])
    const [latest, setLatest] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])
    const [upcoming, setUpcoming] = useState([])

    useEffect(async() => {

        fetch(reqURL("discover", null))
            .then(response => response.json())
            .then(data => {
                setDiscover(data)
            })

        fetch(reqURL("movie/now_playing", null))
            .then(response => response.json())
            .then(data => {
                setNowPlaying(data)
            })

        fetch(reqURL("movie/popular", null))
            .then(response => response.json())
            .then(data => {
                setPopular(data)
            })

        fetch(reqURL("movie/top_rated", null))
            .then(response => response.json())
            .then(data => {
                setTopRated(data)
            })

        fetch(reqURL("movie/upcoming", null))
            .then(response => response.json())
            .then(data => {
                setUpcoming(data)
            })
    }, []);
    return ( <MovieApiContext.Provider value = {
            { forDiscover: [discover, setDiscover], forLatest: [latest, setLatest], forNowPlaying: [nowPlaying, setNowPlaying], forPopular: [popular, setPopular], forTopRated: [topRated, setTopRated], forUpcoming: [upcoming, setUpcoming] }
        } > { props.children } 
        </MovieApiContext.Provider>
    )
}