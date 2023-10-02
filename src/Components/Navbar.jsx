import "../Style/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar">
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
