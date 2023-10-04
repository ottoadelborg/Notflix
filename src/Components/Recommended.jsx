import movies from "../assets/movies.json";
import "../Style/RecomendedMovies.scss";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

function Recommended() {
  const navigate = useNavigate();

  const RandomMovies = [];

  for (let i = 0; i < 3; i++) {
    const RandomMovie = movies[Math.floor(Math.random() * movies.length)];

    if (!RandomMovie.isTrending) {
      RandomMovies.push(RandomMovie);
    }
  }

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
          console.log(movie.thumbnail, "movie");
          return (
            <img
              className={slide === idx ? "slide" : "slide slide-hidden"}
              key={idx}
              src={movie.thumbnail}
              alt={movie.title}
              onClick={() => {
                navigate("/Notflix/film-view", { state: { movie } });
              }}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className={"indicators"}>
          {RandomMovies.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  setSlide(idx);
                }}
                className={
                  slide === idx ? " indicator" : " indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </section>
  );
}
export default Recommended;
