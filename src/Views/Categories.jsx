import { useState } from "react";
import CategoryButtons from "../Components/CategoryButtons";
import movies from "../assets/movies.json";
import "../Style/Categories.scss";
import Navbar from "../Components/Navbar";

function Categories() {
  const [filmCategory, setFilmCategory] = useState("Drama");

  const test = movies?.map((movie) => {
    if (movie.genre.includes(filmCategory)) {
      return (
        <div className="movie-show">
          <img src={movie.thumbnail} alt="No img exist" />
          <p> {movie.title}</p>
        </div>
      );
    }
  });

  return (
    <div className="category-page">
      <Navbar />

      <CategoryButtons />

      <div className="movie-list">{test}</div>
    </div>
  );
}

export default Categories;
