import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import Trending from "../Components/Trending";
import "../Style/Input.scss";
import Recommended from "../Components/Recommended";
import "../Style/Home.scss";
import ".././assets/notflix.png";

function Home() {
  return (
    <div className="home">
      <img className="home__logo" src="src/assets/notflix.png" />
      <Navbar />
      <Input />
      <article className="home__article">
        <Recommended />
        <Trending />
      </article>
    </div>
  );
}
export default Home;
