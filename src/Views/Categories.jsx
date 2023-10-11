import { useState, useEffect } from "react";
import movies from "../assets/movies.json";
import "../Style/Categories.scss";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [filmCategory, setFilmCategory] = useState("");
  const [genre, setGenre] = useState([]);
  const navigate = useNavigate();

  const placeholderImg =
    "https://placehold.jp/30/3d4070/ffffff/380x562.png?text=No%20image";

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

  const saveToStorage = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
    savedMovies.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  };

  const test = genre.map((gen, index) => {
    return (
      <button
        key={index}
        className="button"
        onClick={() => setFilmCategory(gen)}
      >
        {gen}
      </button>
    );
  });

  const content = movies?.map((movie, idx) => {
    if (movie.genre.includes(filmCategory)) {
      return (
        <div key={idx} className="movie-show">
          <img
            src={movie.thumbnail}
            alt="No img exist"
            onClick={() => {
              navigate("/Notflix/film-view", { state: { movie } });
            }}
            onError={(e) => {
              e.target.src = placeholderImg;
            }}
          />
          <p
            onClick={() => {
              navigate("/Notflix/film-view", { state: { movie } });
            }}
          >
            {" "}
            {movie.title}
          </p>
          <button
            onClick={() => {
              saveToStorage(movie);
            }}
            className="button"
          >
            Add to Bookmark
          </button>
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
