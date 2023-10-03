import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
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
