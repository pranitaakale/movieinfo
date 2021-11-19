export const apiKEY = "?api_key=ea9ef48fdd40be1b435aa2c4e401b3dc"
export const baseURL = "https://api.themoviedb.org/3/"

export const imgURL = "https://image.tmdb.org/t/p"

export const imgSIZEs = "/w92"
export var imgSIZE = "/w154"
export const imgSIZEl = "/w342"
export const img_SIZE = (size) => {
    imgSIZE = "/w"+size
    return imgSIZE
}

    // 92 154 185 342 500 780
export const reqURL = (fetchType, val) => {
    switch (fetchType) {
        case "discover":
            return baseURL.concat(fetchType, "/movie", apiKEY, "&page=1&include_adult=false");
        case "search":
            return baseURL.concat(fetchType, "/movie", apiKEY, "&language=en-US&query=", val, "&page=1&include_adult=false");
        case "movie/now_playing":
            return baseURL.concat(fetchType, apiKEY,"&language=en-US");
        case "movie/popular":
            return baseURL.concat(fetchType, apiKEY,"&language=en-US");
        case "movie/top_rated":
            return baseURL.concat(fetchType, apiKEY,"&language=en-US");
        case "movie/upcoming":
            return baseURL.concat(fetchType, apiKEY,"&language=en-US");
        case "/videos":
            return baseURL.concat("movie/",val, fetchType, apiKEY, "&language=en-US");
        case "/credits":
            return baseURL.concat("movie/",val, fetchType, apiKEY, "&language=en-US");
            // "https://api.themoviedb.org/3/movie/"+props.credit_id+"/credits?api_key=ea9ef48fdd40be1b435aa2c4e401b3dc&language=en-US"
        case "movie/":
            return baseURL.concat(fetchType,val,apiKEY, "&language=en-US");

    }
}

export const Loader =() =>{
    return(
        <div className="loader">
            <h1>Loading...</h1>
            <div className="spiral"></div>
        </div>
    )
}