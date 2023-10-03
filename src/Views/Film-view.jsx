import Navbar from "../Components/Navbar";
import "../Style/Film-view.scss";
import { useLocation } from "react-router-dom";

function FilmView() {
  const { state } = useLocation();
  console.log(state);

  return (
    <section>
      <Navbar />
      <section className="filmview">
        <section className="filmview__img">
          {
            <img
              className="filmview__poster"
              src={state.movie.thumbnail}
              alt={state.movie.title}
            />
          }
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
              {" "}
              <strong>Actors:</strong> {state.movie.actors.join(", ")}{" "}
            </p>
            <p>
              <strong>Synopsis:</strong> {state.movie.synopsis}
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default FilmView;
