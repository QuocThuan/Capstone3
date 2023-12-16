import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { quanLyRapServ } from "../../services/quanLyRap";


const Footer = () => {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    quanLyRapServ
      .getThongTinHeThongRap()
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <footer className="p-4 mt-7 bg-white sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <Link to={"/"} className="flex items-center">
                <img src="./image/logo.png" className="w-32" alt="" />
              </Link>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Partner
              </h2>
              <div className="grid grid-cols-3">
                {heThongRap.map((item, index) => {
                  return (
                    <div>
                      <img src={item.logo} className="w-12 mb-2" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            . All Rights Reserved.
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
