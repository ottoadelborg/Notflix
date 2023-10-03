import "../Style/Input.scss";

function ShowHomeMovie({ title, thumbnail }) {
  return (
    <div>
      {title ? (
        <div className="movie-show">
          <img src={thumbnail} alt="finns ingen bror" />
          <p>{title}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ShowHomeMovie;
