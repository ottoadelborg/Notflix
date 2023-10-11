import Navbar from "../Components/Navbar";
import "../Style/Film-view.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function FilmView() {
  const { state } = useLocation();
  const [added, setAdded] = useState(true);

  const placeholderImg =
    "https://placehold.jp/30/3d4070/ffffff/380x562.png?text=No%20image";

  const onImageError = (e) => {
    e.target.src = placeholderImg;
  };

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
      existingMovies.forEach((m) => {
        if (m.title === state.movie.title) {
          setAdded(false);
        }
      });
    } catch (e) {
      console.error("Failed to save the movie to local storage.", e);
    }
  };

  return (
    <section>
      <Navbar />
      {state ? (
        <section className="filmview">
          <section className="filmview__img">
            <img
              className="filmview__poster"
              src={
                state.movie.thumbnail ? state.movie.thumbnail : placeholderImg
              }
              alt={state.movie.title}
              onError={onImageError}
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
              <button
                className="add-button"
                onClick={saveToLocalStorage}
                data-testid="add-favorite"
              >
                {added ? "Add to Bookmark" : "Added"}
              </button>
            </section>
          </section>
        </section>
      ) : (
        <section className="filmview__noFilm">
          <p className="filmview__text">No movie here!</p>
          <a href="/Notflix/" className="filmview__link">
            Back to Home
          </a>
        </section>
      )}
    </section>
  );
}

export default FilmView;
