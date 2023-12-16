import React, { useEffect } from "react";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";
import { useDispatch } from "react-redux";
import { getAllMovieApi } from "../../redux/slices/phimSlice";
import ListMovie from "../../Components/ListMovie/ListMovie";
import TabHeThongRap from "../../Components/TabHeThongRap/TabHeThongRap";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // bắn phương thức đc tạo bởi thunk
    dispatch(getAllMovieApi());
  }, []);

  return (
    <div>
      <HomeCarousel />
      <ListMovie />
      <div className="container py-5">
        <h2 className="text-2xl font-bold text-center">Lịch chiếu</h2>
        <TabHeThongRap />
      </div>
    </div>
  );
};

export default Home;
