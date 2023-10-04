import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import "../Style/Bookmarks.scss";

function Bookmarks() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
    setMovies(savedMovies);
  }, []);

  const removeMovie = (removedMovieTitle) => {
    const updatedMovies = movies.filter(
      (movie) => movie.title !== removedMovieTitle
    );

    localStorage.setItem("savedMovies", JSON.stringify(updatedMovies));

    setMovies(updatedMovies);
  };

  return (
    <>
      <Navbar />
      <section className="main-flex">
        <section className="bookmarks">
          {movies.map((movie, index) => (
            <section key={index} className="bookmark">
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="bookmark__poster"
              />
              <h2 className="bookmark__title">{movie.title}</h2>

              <button
                className="remove-button"
                onClick={() => removeMovie(movie.title)}
              >
                Remove
              </button>
            </section>
          ))}
        </section>
      </section>
    </>
  );
}

export default Bookmarks;
