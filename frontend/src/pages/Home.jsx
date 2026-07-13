import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadPopularMovies(params) {
      try {
        const popularMovies = await getPopularMovies();
        console.log(popularMovies); // check the shape here
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    }

    loadPopularMovies();
  }, []); // run when array changes, not state change

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("---");
  };

  return (
    <div className="home">
      <form
        onSubmit={handleSearch}
        className="search-form"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard
                movie={movie}
                key={movie.id}
              />
            ),
        )}
      </div>
    </div>
  );
} // when dynamically rendering multiple objs, add key property

export default Home;
