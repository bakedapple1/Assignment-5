import axios from "axios";
import { useState, useEffect } from "react";


function Featured() {

    const [movies, setMovies] = ([]);
    const location = "now_playing";

    useEffect(() => {
        async function getData() {
            setMovies((await axios.get(`https://api.themoviedb.org/3/movie/${location}?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data.results);
        };

        getData();
    }, []);

    return (
        <div className="featured-section">
            <h1 className="featured-header">Featured</h1>

            <div className="featured-movies">

                {movies && movies.map(movie => (
                    <div id="mov" className="mov" key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
                        <h1>{`${movie.title}`}</h1>
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
                    </div>
                ))}
                
            </div>
        </div>
    );
}

export default Featured;