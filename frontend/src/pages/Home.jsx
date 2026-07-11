import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "The Matrix", release_date: "2021"},
        {id: 3, title: "Terminator", release_date: "2024"},
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div> 
    </div>
} // when dynamically rendering multiple objs, add key property

export default Home