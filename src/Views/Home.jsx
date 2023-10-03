import Input from "../Components/Input";
import ShowHomeMovie from "../Components/ShowHomeMovie";
import movies from "../assets/movies.json";
import "../Style/Input.scss";
import { useState } from "react";

function Home() {
  const [searchMovie, setSearchMovie] = useState("");
  const [data, setData] = useState("");

  const content = movies.filter(function (movie) {
    return movie.title === searchMovie;
  });

  const handleClick = () => {
    setData(content);
  };
  console.log(data);

  return (
    <div className="search--movie__container">
      <Input setSearchMovie={setSearchMovie} handleClick={handleClick} />
      <ShowHomeMovie title={data[0]?.title} thumbnail={data[0]?.thumbnail} />
    </div>
  );
}

export default Home;
