import Navbar from "../Components/Navbar";
import "../Style/Film-view.scss";

const movie = {
  title: "The Shawshank Redemption",
  year: 1994,
  rating: "R",
  actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  genre: "Drama",
  synopsis:
    "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_QL75_UX380_CR0,4,380,562_.jpg",
};

function FilmView() {
  //const { title, year, rating, actors, genre, synopsis, thumbnail } = props;

  return (
    <section>
      <Navbar />
      <section className="filmview">
        <section className="filmview__img">
          {
            <img
              className="filmview__poster"
              src={movie.thumbnail}
              alt={movie.title}
            />
          }
          <section className="filmview__details">
            <h2 className="filmview__title">{movie.title}</h2>
            <h3>{movie.year}</h3>
            <p>
              <strong>Rating:</strong> {movie.rating}
            </p>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Actors:</strong> {movie.actors.join(", ")}
            </p>
            <p>
              <strong>Synopsis:</strong> {movie.synopsis}
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default FilmView;
