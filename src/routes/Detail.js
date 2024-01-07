import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  // 구조분해할당: 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <MovieDetail movie={movie} />
        </div>
      )}
    </div>
  );
}

export default Detail;
