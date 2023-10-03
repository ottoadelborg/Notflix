import { FaSearch } from "react-icons/fa";
import movies from "../assets/movies.json";
import { useState } from "react";
import "../Style/Input.scss";

function MovieInput() {
  const [searchMovie, setSearchMovie] = useState("");
  const [data, setData] = useState("");

  const content = movies.filter(function (movie) {
    return movie.title === searchMovie;
  });

  const handleClick = () => {
    setData(content);
  };
  console.log(data);

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
        />
        <button className="search--movie__button" onClick={handleClick}>
          <FaSearch className="search--button" />
        </button>
      </div>
      {data[0]?.title ? (
        <div className="movie-show">
          <img
            src={data[0].thumbnail}
            alt="Hittar ingen bild"
            className="movie--card"
          />
          <p className="movie--title">{data[0].title}</p>
        </div>
      ) : null}
    </div>
  );
}

export default MovieInput;
