import movies from "../assets/movies.json";
import "../Style/Trending.scss";
import "../Style/RecomendedMovies.scss";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

function Trending() {
  const trendMovies = [];

  movies.forEach((movie) => {
    if (movie.isTrending) {
      trendMovies.push(movie);
    }
  });

  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === movies.length - 1 ? 0 : slide + 1);
  };
  const previousSlide = () => {
    setSlide(slide === 0 ? movies.length - 1 : slide - 1);
  };

  return (
    <article className="trending">
      <h1 className="recommendedMovies__title">Trending Movies</h1>

      <div className="container">
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        {trendMovies.map((movie, idx) => (
          <img
            className={slide === idx ? "slide" : "slide slide-hidden"}
            key={idx}
            src={movie.thumbnail}
            alt={`${movie.title} No image`}
            onClick={() => {
              navigate("/Notflix/film-view", { state: { movie } });
            }}
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </article>
  );
}

export default Trending;
