import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import "./tabCumRap.scss";
import moment from "moment";

const TabCumRap = ({ maHeThongRap }) => {
  const [cumRap, setCumRap] = useState([]);
  useEffect(() => {
    quanLyRapServ
      .getLayThongTinLichChieu(maHeThongRap)
      .then((res) => {
        console.log(res);
        // Lấy danh sách các cụm rạp của 1 hệ thống rạp và lưu vào state
        setCumRap(res.data.content[0].lstCumRap);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      <Tabs
        tabPosition={"left"}
        // items={new Array(3).fill(null).map((_, i) => {
        //   const id = String(i + 1);
        //   return {
        //     label: `Tab ${id}`,
        //     key: id,
        //     children: `Content of Tab ${id}`,
        //   };
        // })}
        tabBarStyle={{
          maxWidth: "250px",
          maxHeight: "650px",
          overflowY: "scroll",
        }}
        className="tabCumRap"
        items={cumRap.map((item, index) => {
          console.log(item);
          return {
            label: (
              <div className="text-left w-full ">
                <h3 className="text-green-500 truncate max-w-[200px]">
                  {item.tenCumRap}
                </h3>
                <p className="text-grey-500 truncate max-w-[200px]">
                  {item.diaChi}
                </p>
              </div>
            ),
            key: index,
            children: (
              <div
                className="space-y-5 px-5"
                style={{ maxHeight: "650px", overflowY: "scroll" }}
              >
                {item.danhSachPhim.map((lichChieu, index) => {
                  return (
                    <div className="grid grid-cols-12 gap-4" key={index}>
                      <div className="col-span-3">
                        <img
                          className="h-32 w-20 object-cover"
                          src={lichChieu.hinhAnh}
                          alt=""
                        />
                      </div>
                      <div className="col-span-9">
                        <h4 className="font-bold text-lg">
                          {lichChieu.tenPhim}
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {lichChieu.lstLichChieuTheoPhim
                            .slice(0, 4)
                            .map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className="py-1 px-2 border border-gray-300 space-x-1"
                                >
                                  <span className="text-green-500">
                                    {moment(item.ngayChieuGioChieu).format(
                                      "DD-MM-YYYY"
                                    )}
                                  </span>
                                  <span>~</span>
                                  <span className="text-orange-500">
                                    {moment(item.ngayChieuGioChieu).format(
                                      "hh:mm"
                                    )}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ),
          };
        })}
      />
    </div>
  );
};

export default TabCumRap;
