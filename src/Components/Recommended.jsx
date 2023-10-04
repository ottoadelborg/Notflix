import movies from "../assets/movies.json";
import "../Style/RecomendedMovies.scss";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

function Recommended() {
  const navigate = useNavigate();

  function shuffle() {
    RandomMovies.sort(() => Math.random() - 0.5);
  }

  const RandomMovies = [];

  movies.forEach((movie) => {
    if (!movie.isTrending) {
      RandomMovies.push(movie);
    }
  });

  shuffle();

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === RandomMovies.length - 1 ? 0 : slide + 1);
  };
  const previousSlide = () => {
    setSlide(slide === 0 ? RandomMovies.length - 1 : slide - 1);
  };

  return (
    <section className="recommendedMovies">
      <h1 className="recommendedMovies__title">Recommended Movies</h1>

      <div className="container">
        <BsArrowLeftCircleFill
          data-testid="arrowLeft"
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        {RandomMovies.map((movie, idx) => {
          return (
            <img
              className={slide === idx ? "slide" : "slide slide-hidden"}
              key={idx}
              src={movie.thumbnail}
              alt={`No Image found: ${movie.title}`}
              onClick={() => {
                navigate("/Notflix/film-view", { state: { movie } });
              }}
            />
          );
        })}
        <BsArrowRightCircleFill
          data-testid="arrowRight"
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </section>
  );
}
export default Recommended;
