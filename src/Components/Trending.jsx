import movies from "../assets/movies.json";
import CaroselMovie from "./CaroselMovie";
import "../Style/Trending.scss";

function Trending() {
  const RandomMovies = [];
  console.log(RandomMovies);

  for (let i = 0; i < 5; i++) {
    const RandomMovie = movies[Math.floor(Math.random() * movies.length)];
    RandomMovies.push(RandomMovie);
  }
  return (
    <article className="trending">
      {RandomMovies.map((movie, index) => (
        <CaroselMovie key={index} movie={movie} />
      ))}
    </article>
  );
}

export default Trending;
