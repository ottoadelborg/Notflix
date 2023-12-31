import movies from "../assets/movies.json";
import "../Style/Trending.scss";
import "../Style/RecomendedMovies.scss";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Slider from "./Slider";

function Trending() {
  const trendMovies = [];

  movies.forEach((movie) => {
    if (movie.isTrending) {
      trendMovies.push(movie);
    }
  });

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === trendMovies.length - 1 ? 0 : slide + 1);
  };
  const previousSlide = () => {
    setSlide(slide === 0 ? trendMovies.length - 1 : slide - 1);
  };
  return (
    <article className="trending">
      <h1 className="trending__header">Trending Movies</h1>

      <div className="container">
        <BsArrowLeftCircleFill
          data-testid="arrowLeft"
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        {trendMovies.map((movie, idx) => (
          <Slider key={idx} movie={movie} slide={slide} idx={idx} />
        ))}
        <BsArrowRightCircleFill
          data-testid="arrowRight"
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </article>
  );
}

export default Trending;
