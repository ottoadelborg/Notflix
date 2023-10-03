import RecomendedMovies from "../Components/RecomendedMovies";
import Navbar from "../Components/Navbar";
import "../Style/Home.scss";
function Home() {
  return (
    <>
      <Navbar />
      <RecomendedMovies />
    </>
  );
}

export default Home;
