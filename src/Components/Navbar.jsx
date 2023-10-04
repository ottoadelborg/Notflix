import "../Style/Navbar.scss";
import logo from "../assets/download.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar">
      <img src={logo} alt="Logo" className="Logo" />
      <Link className="navbar__links" to={"../Notflix"}>
        Home
      </Link>
      <Link className="navbar__links" to={"../Notflix/categories"}>
        Categories
      </Link>
      <Link className="navbar__links" to={"../Notflix/bookmarks"}>
        Bookmarks
      </Link>
    </section>
  );
}

export default Navbar;
