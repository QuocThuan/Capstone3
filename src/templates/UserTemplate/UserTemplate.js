import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { useSelector } from "react-redux";

const UserTemplate = () => {
  const { isActive } = useSelector((state) => state.loadingSlice);

  return (
    <>
      {isActive ? <Loading /> : null}

      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>

  );
};

export default UserTemplate;
