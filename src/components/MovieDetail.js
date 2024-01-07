import PropTypes from "prop-types";

function MovieDetail({ movie }) {
  return (
    // img 태그의 alt 속성은 이미지를 보여줄 수 없을 떄 해당 이미지를 대체할 테스트를 명시하는 것
    <div>
      <img src={movie.background_image} alt={movie.title}></img>
      <div>
        <img src={movie.small_cover_image} alt={movie.title}></img>
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
