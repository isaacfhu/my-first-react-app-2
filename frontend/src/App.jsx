import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Tim Movie", release_date: "2026" }} />
      <MovieCard movie={{ title: "Joe Movie", release_date: "2026" }} />
    </>
  );
}

export default App;
