import movies from "../assets/movies.json";
import "../Style/RecomendedMovies.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function RecomendedMovies() {
  const RandomMovies = [];
  console.log(RandomMovies);

  for (let i = 0; i < 5; i++) {
    const RandomMovie = movies[Math.floor(Math.random() * movies.length)];
    RandomMovies.push(RandomMovie);
  }

  return (
    <section className="recommendedMovies">
      <h1 className="recommendedMovies__title">Recommended Movies</h1>
      <article className="slide-container">
        <Slide>
          <div className="each-slide-effect">
            <div
              style={{ backgroundImage: `url(${RandomMovies[0].thumbnail})` }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{ backgroundImage: `url(${RandomMovies[1].thumbnail})` }}
            ></div>
          </div>
          <div className="each-slide-effect">
            <div
              style={{ backgroundImage: `url(${RandomMovies[2].thumbnail})` }}
            ></div>
          </div>
        </Slide>
      </article>
    </section>
  );
}

export default RecomendedMovies;
