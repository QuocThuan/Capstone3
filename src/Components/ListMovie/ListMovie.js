import React from "react";
import { useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import { Carousel } from "antd";
import "./listMovie.scss";
const ListMovie = () => {
  const { arrPhim } = useSelector((state) => state.phimSlice);
  // console.log(arrPhim);
  return (
    <div className="container  py-10">
      <h2 className="text-center font-bold text-2xl">Danh sách các phim</h2>
      <Carousel
        rows={2}
        slidesToShow={4}
        dots={true}
        className="carousel_movie"
        slidesToScroll={4}
      >
        {arrPhim.map((item, index) => {
          return (
            <div className="p-5" key={index}>
              <MovieItem movie={item} />
            </div>
          );
        })}
      </Carousel>

      {/* <div className="grid grid-cols-4 gap-5 mt-5"> */}

      {/* </div> */}
    </div>
  );
};

export default ListMovie;
