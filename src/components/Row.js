import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

export default function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // 주로 필요한 정보를 가져올 때 쓰임
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };
  return (
    <section className="row">
      <h2> {title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          {/* 그냥 < 이부호를 쓰게 되면 에러나므로 {"<"} 이렇게 사용해야함 */}
          <span
            className="arrow"
            onClick={() => {
              document.getElemenById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            {"<"}
          </span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              style={{ padding: "25px 0" }}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original/${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              } `}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              document.getElemenById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            {">"}
          </span>
        </div>
      </div>
    </section>
  );
}
