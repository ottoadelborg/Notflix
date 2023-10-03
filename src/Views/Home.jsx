import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import RecomendedMovies from "../Components/RecomendedMovies";
import "../Style/Input.scss";
import Test from "../Components/test";
import "../Style/Home.scss";

function Home() {
  return (
    <div className="search--movie__container">
      <Navbar />
      <Input />
      <RecomendedMovies />
      <Test />
    </div>
  );
}

export default Home;
