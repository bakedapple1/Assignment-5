import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Genres from "../components/Genres";
import "./MoviesView.css";

function MoviesView() {
    const navigate = useNavigate()
    const { selectedGenres } = useStoreContext();
    const [genreMovies, setGenreMovies] = useState();
    const [page, setPage] = useState(1);

    function changePageBy(changeBy) {
        if (page + changeBy < 1) {
            setPage(1);
            alert("Page out of bounds.");
        } else if (page + changeBy > 500) {
            setPage(500);
            alert("Page out of bounds.");
        } else {
            setPage(page + changeBy);
        }
    }

    useEffect(() => {
        async function getData() {
            if (selectedGenres.length > 0) {
                const moviesData = (await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${selectedGenres.join("|")}&page=${page}`)).data.results;
                setGenreMovies([...moviesData]);
            }
        };

        getData();
    }, [page, selectedGenres]);

    return (
        <div className="movies-view-container">
            <Header />
            <div className="genres">
                <Genres />
                <div className="genre-movies">
                    {genreMovies && genreMovies.map(movie => (
                        <div className="gen-mov" key={movie.id} onClick={() => navigate(`/movies/details/${movie.id}`)}>
                            <img className="gen-mov-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.id}`} />
                            <h1 className="gen-mov-label">{`${movie.title}`}</h1>
                        </div>
                    ))}
                </div>
                <div className="pagination" >
                    <button className="page-button" onClick={() => changePageBy(-10)}>&lt;&lt;</button>
                    <button className="page-button" onClick={() => changePageBy(-1)}>Prev</button>
                    <div className="page-counter" >Page: {page}</div>
                    <button className="page-button" onClick={() => changePageBy(1)}>Next</button>
                    <button className="page-button" onClick={() => changePageBy(10)}>&gt;&gt;</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MoviesView;