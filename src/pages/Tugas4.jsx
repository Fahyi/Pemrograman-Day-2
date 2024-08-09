import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import ListFavorite from "../components/ListFavorite";

const Tugas4 = () => {
  const [movies, setMovies] = useState();
  const [favorites, setFavorites] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  function addFavorite(movie) {
    let localMovies = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites((prev) => [...prev, movie]);

    localMovies.push(movie);

    localStorage.setItem("favorites", JSON.stringify(localMovies));
  }

  const filteredMovies = movies?.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    console.log(filteredMovies);

    async function fetchFilm() {
      const { data } = await axios.get("https://freetestapi.com/api/v1/movies");
      console.log(data);

      setMovies(data);
    }
    fetchFilm();
  }, []);

  return (
    <div className="p-4 mx-auto">
      <ListFavorite />
      <input
        type="text"
        placeholder="Cari film"
        onChange={(i) => setSearchInput(i.target.value)}
      />
      <ul className="grid grid-cols-3 gap-2">
        {filteredMovies &&
          filteredMovies.map((movie, i) => (
            <li key={i}>
              <MovieCard movie={movie} addFavorite={addFavorite} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tugas4;
