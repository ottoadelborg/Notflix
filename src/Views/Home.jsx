import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import RecomendedMovies from "../Components/RecomendedMovies";
import "../Style/Input.scss";
import "../Style/Home.scss";

function Home() {
  return (
    <div className="search--movie__container">
      <Navbar />
      <Input />
      <RecomendedMovies />
    </div>
  );
}

export default Home;
