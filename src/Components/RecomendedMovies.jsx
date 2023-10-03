import movies from "../assets/movies.json";
import "../Style/RecomendedMovies.scss";
import CaroselMovie from "./CaroselMovie";

function RecomendedMovies() {
  const RandomMovies = [];
  console.log(RandomMovies);

  for (let i = 0; i < 5; i++) {
    const RandomMovie = movies[Math.floor(Math.random() * movies.length)];
    RandomMovies.push(RandomMovie);
  }

  return (
    <section className="recommendedMovies">
      <h1>Recommended Movies</h1>
      <article className="recommendedMovies__carosel">
        {RandomMovies.map((movie, index) => (
          <CaroselMovie key={index} movie={movie} />
        ))}
      </article>
    </section>
  );
}

export default RecomendedMovies;
