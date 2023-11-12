import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const AdminTemple = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // gọi dữ liệu từ localStoge và kiểm tra 
    const dataUser = JSON.parse(localStorage.getItem('userLogin'))
    if (dataUser) {
      if (dataUser.maLoaiNguoiDung !== 'QuanTri') {
        window.location.href = 'http://google.com'
      }
    } else {
      window.location.href = 'http://google.com'
    }
  }, [])


  let [selectedKey, setSelectedKey] = useState([]);

  useEffect(() => {
    // kiểm tra nếu pathname ko có chứa từ khóa trong mảng selectkey thì sẽ cho mảng select giá trị rỗng
    if (!location.pathname.includes(selectedKey[0])) {
      setSelectedKey([]);
    }
  }, [location.pathname]);
  // console.log(selectedKey);

  return (
    <Layout className="min-h-screen">
      <Sider
        className="bg-green-500 py-5"
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
      >
        <div className="demo-logo-vertical" />
        <Link to={"/admin"}>
          <img src="./image/logo.png" className="w-32 mx-auto mb-5" alt="" />
        </Link>
        <Menu
          onSelect={({ item, key, selectedKeys }) => {
            // console.log(item);
            // console.log(key); // manager-movie
            // console.log(selectedKeys);
            // xu li chuyen huong ng dung thong qua key
            setSelectedKey([key]);
            navigate(key);
          }}
          selectedKeys={selectedKey}
          theme="light"
          mode="inline"
          //   items={[
          //     UserOutlined,
          //     VideoCameraOutlined,
          //     UploadOutlined,
          //     UserOutlined,
          //   ].map((icon, index) => ({
          //     key: String(index + 1),
          //     icon: React.createElement(icon),
          //     label: `nav ${index + 1}`,
          //   }))}
          items={[
            {
              icon: <i className="fa-solid fa-user-tie"></i>,
              title: "Quan ly User", // admin-manager-user
              key: "manager-user",
            },
            {
              icon: <i className="fa-solid fa-user-tie"></i>,
              title: "Quan ly phim",
              key: "manager-movie",
            },
            {
              icon: <i className="fa-solid fa-user-tie"></i>,
              title: "Tao phim",
              key: "create-movie",
            },
            {
              icon: <i className="fa-solid fa-user-tie"></i>,
              title: "Tao lich chieu",
              key: "create-showtime",
            },
          ].map((item, index) => {
            return {
              key: item.key,
              icon: item.icon,
              label: item.title,
            };
          })}
        />
      </Sider>
      <Layout>
        <Header />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div>
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminTemple;
