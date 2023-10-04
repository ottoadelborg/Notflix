import Navbar from "../Components/Navbar";
import "../Style/Film-view.scss";
import { useLocation } from "react-router-dom";

function FilmView() {
  const { state } = useLocation();

  const saveToLocalStorage = () => {
    try {
      const existingMovies =
        JSON.parse(localStorage.getItem("savedMovies")) || [];

      if (existingMovies.some((movie) => movie.title === state.movie.title)) {
        console.log("Movie already saved");
        return;
      }

      existingMovies.push(state.movie);

      localStorage.setItem("savedMovies", JSON.stringify(existingMovies));
    } catch (e) {
      console.error("Failed to save the movie to local storage.", e);
    }
  };

  return (
    <section>
      <Navbar />
      <section className="filmview">
        <section className="filmview__img">
          <img
            className="filmview__poster"
            src={state.movie.thumbnail}
            alt={state.movie.title}
          />
          <section className="filmview__details">
            <h2 className="filmview__title">{state.movie.title}</h2>
            <h3>{state.movie.year}</h3>
            <p>
              <strong>Rating:</strong> {state.movie.rating}
            </p>
            <p>
              <strong>Genre:</strong> {state.movie.genre}
            </p>
            <p>
              <strong>Actors:</strong> {state.movie.actors.join(", ")}
            </p>
            <p>
              <strong>Synopsis:</strong> {state.movie.synopsis}
            </p>
            <button className="add-button" onClick={saveToLocalStorage}>
              Add to favourite
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

export default FilmView;
