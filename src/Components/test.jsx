import movies from "../assets/movies.json";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "../Style/Test.scss";

function Test() {
  const RandomMovies = [];
  console.log(RandomMovies);

  for (let i = 0; i < 5; i++) {
    const RandomMovie = movies[Math.floor(Math.random() * movies.length)];
    RandomMovies.push(RandomMovie);
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="recommendedMovies">
      <h1 className="recommendedMovies__title">Recommended Movies</h1>

      <div className="container">{}</div>
    </section>
  );
}
export default Test;
