import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"


function Featured() {
    const [threeMovies, setThreeMovies] = useState([]);
    const location = "now_playing";
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const movies = (await axios.get(`https://api.themoviedb.org/3/movie/${location}?api_key=${import.meta.env.VITE_TMDB_KEY}`)).data.results;
            const selectedMovies = new Set();

            while (selectedMovies.size < 3 && movies.length > 0) {
                selectedMovies.add(movies[Math.floor(Math.random()*movies.length)]);
            }
            setThreeMovies([...selectedMovies]);
        };

        getData();
    }, []);

    return (
        <div className="featured-section">
            <h1 className="featured-header">Featured</h1>
            <div className="featured-movies">
                {threeMovies && threeMovies.map(movie => (
                    <div id="mov" className="mov" key={movie.id} onClick={() => navigate(`/movies/${movie.id}`)}>
                        <h1 className="mov-label">{`${movie.title}`}</h1>
                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Featured;