import { FaSearch } from "react-icons/fa";
import "../Style/Input.scss";

function MovieInput({ setSearchMovie, handleClick }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movie..."
        onChange={(e) => {
          setSearchMovie(e.target.value);
        }}
        className="search--movie__input"
      />
      <button className="search--movie__button">
        <FaSearch className="search--button" onClick={handleClick} />
      </button>
    </div>
  );
}

export default MovieInput;
