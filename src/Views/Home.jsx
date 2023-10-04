import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import Trending from "../Components/Trending";
import "../Style/Input.scss";
import Recommended from "../Components/Recommended";
import "../Style/Home.scss";
function Home() {
  return (
    <div className="home">
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
