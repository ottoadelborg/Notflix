import { useState, useEffect } from "react";
import movies from "../assets/movies.json";
import "../Style/Categories.scss";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [filmCategory, setFilmCategory] = useState("");
  const [genre, setGenre] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const genreArray = [];

    movies.forEach((movie) => {
      const genres = movie.genre.split(",").map((genre) => genre.trim());

      genres.forEach((genre) => {
        if (!genreArray.includes(genre)) {
          genreArray.push(genre);
        }
      });
    });

    setGenre(genreArray);
  }, []);

  const test = genre.map((gen, index) => {
    return (
      <button
        key={index}
        className="button"
        onClick={() => setFilmCategory(gen)}>
        {gen}
      </button>
    );
  });

  const content = movies?.map((movie, idx) => {
    if (movie.genre.includes(filmCategory)) {
      return (
        <div
          key={idx}
          className="movie-show"
          onClick={() => {
            navigate("/Notflix/film-view", { state: { movie } });
          }}>
          <img src={movie.thumbnail} alt="No img exist" />
          <p> {movie.title}</p>
        </div>
      );
    }
  });

  return (
    <div className="category-page">
      <Navbar />
      <div className="buttons">{test}</div>

      <div className="movie-list">{content}</div>
    </div>
  );
}

export default Categories;
