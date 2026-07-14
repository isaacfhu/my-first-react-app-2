import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export function useMovieContext() {
  useContext();
}

export function MovieProvider({ children }) {
  // children = reserved property
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movie) {
    setFavorites((prev) => [...prev, movie]); // = arr.push()
  }

  function removeFromFavorites(movieId) {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  }

  function isFavorite(movieId) {
    return favorites.some((movie) => movie.id === movieId);
  }

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
