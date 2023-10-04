import trending from "../assets/trending.json";
import "../Style/Trending.scss";
import "../Style/RecomendedMovies.scss";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router";

function Trending() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === trending.length - 1 ? 0 : slide + 1);
  };
  const previousSlide = () => {
    setSlide(slide === 0 ? trending.length - 1 : slide - 1);
  };

  return (
    <article className="trending">
      <section className="recommendedMovies">
        <h1 className="recommendedMovies__title">Trending Movies</h1>

        <div className="container">
          <BsArrowLeftCircleFill
            className="arrow arrow-left"
            onClick={previousSlide}
          />
          {trending.map((movie, idx) => (
            <img
              className={slide === idx ? "slide" : "slide slide-hidden"}
              key={idx}
              src={movie.thumbnail}
              alt={movie.title}
              onClick={() => {
                navigate("/Notflix/film-view", { state: { movie } });
              }}
            />
          ))}
          <BsArrowRightCircleFill
            className="arrow arrow-right"
            onClick={nextSlide}
          />
          <span className={"indicators"}>
            {trending.map((_, idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSlide(idx);
                  }}
                  className={
                    slide === idx
                      ? " indicator"
                      : " indicator indicator-inactive"
                  }
                ></button>
              );
            })}
          </span>
        </div>
      </section>
    </article>
  );
}

export default Trending;
