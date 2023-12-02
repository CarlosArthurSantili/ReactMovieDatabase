import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=d23ea893";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const repsonse = await fetch(`${API_URL}&s=${title}`);
        const data = await repsonse.json();
        setMovies(data.Search);
    }

    const handleEnterKeyUp = (event) => {
        if (event.key === 'Enter'){
            searchMovies(searchTerm)
       }
    }

    useEffect(() => {
        searchMovies('batman')
    },[])

    return (
        <div>
            <h1>Movie Database</h1>
            <div className="search">
                <input 
                    placeholder = "search for movies" 
                    value = {searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={handleEnterKeyUp}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}             
                    </div>
                ) :
                (
                    <div className="emptyContainer">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    )
}

export default App;