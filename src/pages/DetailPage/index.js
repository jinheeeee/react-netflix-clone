import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  // 파람을 이용해서 movie id를 가져옴
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      // movie 정보 가져오기
      const request = await axios.get(`/movie/${movieId}`);
      console.log("request", request);
      setMovie(request.data);
    }
    fetchData();
  }, [movieId]);
  // movieId가 바뀔 때마다 콜해줌

  if (!movie) return <div>loading...</div>;

  return (
    <section>
      <img
      className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
}
