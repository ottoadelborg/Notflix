import "../Style/Slider.scss";
import { useNavigate } from "react-router";

function Slider({ movie, slide, idx }) {
  const navigate = useNavigate();

  const placeholderImg =
    "https://placehold.jp/30/3d4070/ffffff/380x562.png?text=No%20image";

  const onImageError = (e) => {
    e.target.src = placeholderImg;
  };

  const saveToStorage = () => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
    savedMovies.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  };

  return (
    <article
      className={slide === idx ? "slideArticle" : "slideArticle slide-hidden"}
    >
      <img
        className={slide === idx ? "slide" : "slide slide-hidden"}
        src={movie.thumbnail ? movie.thumbnail : placeholderImg}
        alt={`No image: ${movie.title}`}
        onError={onImageError}
        onClick={() => {
          navigate("/Notflix/film-view", { state: { movie } });
        }}
      />
      {
        <p className={slide === idx ? "infoText" : "infoText slide-hidden"}>
          {movie.year}, {movie.rating}
        </p>
      }
      {
        <button
          className={slide === idx ? "btn" : "btn btn-hidden"}
          onClick={saveToStorage}
        >
          Bookmark: {movie.title}
        </button>
      }
    </article>
  );
}

export default Slider;
