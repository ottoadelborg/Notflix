import movies from "../assets/movies.json";

// ta fram 5 random movies
// gör en karusell med filmer bild och pilar.

function RecomendedMovies() {
  const RandomMovies = [];
  console.log(RandomMovies);

  for (let i = 0; i < 5; i++) {
    const RandomMovie = movies[Math.floor(Math.random() * movies.length)];
    RandomMovies.push(RandomMovie);
  }

  return (
    <section>
      <h1>Recommended Movies</h1>
      <article>
        {RandomMovies.map((movie, index) => (
          <img key={index} src={movie.thumbnail} alt="" />
        ))}
      </article>
    </section>
  );
}

export default RecomendedMovies;
