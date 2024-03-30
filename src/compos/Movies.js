import React, { useState } from 'react';
import axios from 'axios';
import './Movies.css'
import Header from './Header';

const Movies = () => {
   //states
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

  //Consume the API
    const searchMovie = async (e) => {
        e.preventDefault();

        const URI = process.env.REACT_APP_APIURI
        const apiURI = `${URI}${query}`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            //console.log(data);
            
            const filtedMovies = data.filter(movie => movie.Poster !== "N/A" );

            console.log(data)
            console.log(filtedMovies)

           //setState
            setMovies(filtedMovies);

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="shoppies">
         {/*Header component*/}
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}

export default Movies;