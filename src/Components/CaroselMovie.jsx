import "../Style/CaroselMovie.scss";

function CaroselMovie({ movie }) {
  return (
    <section className="carosellMovie">
      <img className="carososellMovie__img" src={movie.thumbnail} alt="" />
    </section>
  );
}

export default CaroselMovie;
