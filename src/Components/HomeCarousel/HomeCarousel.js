import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { quanLyPhimServ } from "../../services/quanLyPhim";
import "./HomeCarousel.scss";
import { useDispatch } from "react-redux";
import { get_loading_started, get_loading_ended } from './../../redux/slices/loadingSlice.js'
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const HomeCarousel = () => {
  const dispacth = useDispatch();
  const [arrCarousel, setArrCarousel] = useState([]);
  useEffect(() => {
    dispacth(get_loading_started());
    quanLyPhimServ
      .getAllBanner()
      .then((res) => {
        // console.log(res);
        setArrCarousel(res.data.content);
        dispacth(get_loading_ended());
      })
      .catch((err) => {
        console.log(err);
        dispacth(get_loading_ended());
      });
  }, []);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 10,
          insetInlineEnd: "5px",
          color: "white",
          fontSize: "30px",
        }}
        onClick={onClick}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 10,
          insetInlineStart: 0,
          color: "white",
          fontSize: "30px",
        }}
        onClick={onClick}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
    );
  };

  return (
    <Carousel
      autoplay={true}
      effect="fade"
      nextArrow={<SampleNextArrow />}
      prevArrow={<SamplePrevArrow />}
      arrows={true}
      className="HomeCarousel"
    >
      {arrCarousel.map((item, index) => {
        return (
          <div key={index}>
            <img
              className="w-full object-cover h-600"
              src={item.hinhAnh}
              alt=""
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
