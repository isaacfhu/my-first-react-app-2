import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "The Matrix", release_date: "2021"},
        {id: 3, title: "Terminator", release_date: "2024"},
    ]

    const handleSearch = () => {

    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div> 
    </div>
} // when dynamically rendering multiple objs, add key property

export default Home