import movies from "../assets/movies.json";
function Trending() {
  const RandomMovies = [];
  console.log(RandomMovies);

  for (let i = 0; i < 5; i++) {
    const RandomMovie = movies[Math.floor(Math.random() * movies.length)];
    RandomMovies.push(RandomMovie);
  }
  return <div>Trending</div>;
}

export default Trending;
