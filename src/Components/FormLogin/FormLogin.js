import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { quanLyNguoiDungServ } from "../../services/quanLyNguoiDung";
import { message } from "antd";
import { saveLocalStore } from "../../ultils/localStore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getInfoUser } from "../../redux/slices/nguoiDungSlice";

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (value) => {
      console.log(value);
      quanLyNguoiDungServ
        .dangNhap(value)
        .then((res) => {
          console.log(res);
          // lưu dữ liệu người dùng
          saveLocalStore(res.data.content, "userLogin");
          // lưu trữ dữ liệu lên store redux
          dispatch(getInfoUser(res.data.content));
          // đẩy người dùng về trang chủ
          navigate("/");
        })
        .catch((err) => {
          //   console.log(err);
          messageApi.error(
            err.response.data.content || "Có lỗi xảy ra, vui lòng thử lại"
          );
        });
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
      matKhau: Yup.string().required("Vui lòng không bỏ trống"),
    }),
  });

  const { handleChange, handleSubmit, handleBlur, touched, errors } = formik;

  return (
    <>
      {contextHolder}
      <div className="bg-white rounded-md py-10 px-16 text-center h-full space-y-5">
        <img className="w-32 mx-auto" src="./image/logo.png" alt="" />
        <h2 className="text-4xl font-bold">Login Form</h2>
        <p className="text-lg">Nhập thông tin ở form bên dưới </p>
        <form onSubmit={handleSubmit} className="space-y-5 text-left">
          <div>
            <div>
              <label
                htmlFor="taiKhoan"
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
                Tài khoản
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="taiKhoan"
                name="taiKhoan"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập vào tài khoản"
              />
              {errors.taiKhoan && touched.taiKhoan && (
                <p className="text-red-500 text-sm mt-1">{errors.taiKhoan}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="matKhau"
                className="block mb-2 text-lg font-medium text-gray-900 "
              >
                Mật khẩu
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="matKhau"
                name="matKhau"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nhập vào mật khẩu"
              />
              {errors.matKhau && touched.matKhau && (
                <p className="text-red-500 text-sm mt-1">{errors.matKhau}</p>
              )}
            </div>
            <div className="my-3">
              <button
                type="submit"
                className="bg-black text-white rounded-xl py-3 px-7 w-full"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
