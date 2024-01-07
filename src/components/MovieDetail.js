import PropTypes from "prop-types";

function MovieDetail({ movie }) {
  return (
    <div>
      <img src={movie.background_image} alt={movie.title}></img>
      <img src={movie.small_cover_image} alt={movie.title}></img>
      <div>
        <h2>{movie.title}</h2>
        <h3>{movie.rating}</h3>
        <p>{movie.description_intro}</p>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    background_image: PropTypes.string.isRequired,
    small_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description_intro: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieDetail;
