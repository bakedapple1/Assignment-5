import { useState, useEffect } from "react";
import { useStoreContext } from "../context";
import "./Genres.css";

function Genres() {
    const { toggleState, setToggleState, selectedGenre, setSelectedGenre } = useStoreContext();
    const [genresArray, setGenresArray] = useState([
        { genre: "Action", id: 28 },
        { genre: "Adventure", id: 12 },
        { genre: "Animation", id: 16 },
        { genre: "Crime", id: 80 },
        { genre: "Family", id: 10751 },
        { genre: "Fantasy", id: 14 },
        { genre: "History", id: 36 },
        { genre: "Horror", id: 27 },
        { genre: "Mystery", id: 9648 },
        { genre: "Sci-Fi", id: 878 },
        { genre: "War", id: 10752 },
        { genre: "Western", id: 37 }
    ]);

    useEffect(() => {
        if (!selectedGenre) {
            const allGenres = genresArray.map(genre => genre.id);
            setSelectedGenre(allGenres);
        }
    }, []);

    function toggleGenre(buttonID) {
        let newToggleState = [...toggleState];
        if (!newToggleState[buttonID]) {
            newToggleState = Array(genresArray.length).fill(false);
        }
        newToggleState[buttonID] = !newToggleState[buttonID];

        const newSelectedGenre = genresArray.filter((genre, index) => newToggleState[index]).map(genre => genre.id);
        if (newSelectedGenre.length == 0) {
            setSelectedGenre(genresArray.map(genre => genre.id));
            setToggleState(Array(genresArray.length).fill(false));
        } else {    
            setSelectedGenre([genresArray[buttonID].id]);
            setToggleState(newToggleState);
        }
    }

    return (
        <div className="genre-container">
            <h1 className="genre-msg">Select Genres</h1>
            <div className="genre-select">
                {genresArray.map((genreSelect, index) => (
                    <button key={genreSelect.id} className={toggleState[index] ? "active-genre" : "inactive-genre"} onClick={() => toggleGenre(index)}>
                        {genreSelect.genre}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Genres;