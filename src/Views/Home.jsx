import Input from "../Components/Input";
import Navbar from "../Components/Navbar";
import "../Style/Input.scss";
import Recommended from "../Components/Recommended";
import "../Style/Home.scss";

function Home() {
  return (
    <div className="search--movie__container">
      <Navbar />
      <Input />
      <Recommended />
    </div>
  );
}
export default Home;
