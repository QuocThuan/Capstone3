import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapServ } from "../../services/quanLyRap";
import TabCumRap from "../TabCumRap/TabCumRap";

const TabHeThongRap = () => {
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
    <div className="mt-5">
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
        items={heThongRap.map((item, index) => {
          return {
            label: <img src={item.logo} className="w-12" />,
            key: item.maHeThongRap,
            children: <TabCumRap maHeThongRap={item.maHeThongRap} />,
          };
        })}
      />
    </div>
  );
};

export default TabHeThongRap;
