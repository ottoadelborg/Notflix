import RecomendedMovies from "../Components/RecomendedMovies";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <main>
      <Navbar />
      <h1>Notflix</h1>
      <RecomendedMovies />
    </main>
  );
}

export default Home;
