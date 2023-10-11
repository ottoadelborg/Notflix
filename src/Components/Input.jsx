import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../assets/movies.json";
import "../Style/Input.scss";

function MovieInput() {
  const [searchMovie, setSearchMovie] = useState("");
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const content = movies.filter(function (movie) {
    return movie.title === searchMovie;
  });

  const handleClick = () => {
    setData(content);
  };
  console.log(data);

  const saveToStorage = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
    savedMovies.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  };

  return (
    <div className="search--container">
      <div className="input--container">
        <input
          type="text"
          placeholder="Search movie..."
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
          className="search--movie__input"
          role="movie-search"
        />
        <button
          className="search--movie__button"
          onClick={handleClick}
          data-testid="search-button">
          <FaSearch className="search--button" />
        </button>
      </div>
      {data[0]?.title ? (
        <div className="movie-show" data-testID="movie">
          <img
            onClick={() => {
              navigate("/Notflix/film-view", { state: { movie: data[0] } });
            }}
            src={data[0].thumbnail}
            alt="Hittar ingen bild"
            className="movie--card"
            role="movie-picture"
          />
          <p className="movie--title">{data[0].title}</p>
          <hr className="hr-text gradient" />
          <button
            onClick={() => {
              saveToStorage(data[0]);
            }}
            className="favorites--button">
            Add to favorite
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default MovieInput;
