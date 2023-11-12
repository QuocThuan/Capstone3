import React from "react";
import { useFormik } from "formik";
import { DatePicker, Rate, Switch } from "antd";
import { quanLyPhimServ } from "../../services/quanLyPhim";
const FormAddMovie = () => {
    const formik = useFormik({
        initialValues: {
            tenPhim: "",
            trailer: "",
            moTa: "",
            ngayChieu: "",
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: "",
            hinhAnh: "",
        },
        onSubmit: (values) => {
            console.log(values);
            let formData = new FormData();
            for (let key in values) {
                if (key === "hinhAnh") {
                    formData.append("File", values[key]);
                }
                formData.append(key, values[key]);
            }
            quanLyPhimServ
                .themPhim(formData)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
            // console.log(formData)
        },
    });

    const { values, handleChange, handleBlur, handleSubmit, setFieldValue } =
        formik;

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-5 form-add-movie">
                <div>
                    <label
                        htmlFor="tenPhim"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Tên Phim
                    </label>
                    <input
                        type="text"
                        id="tenPhim"
                        name="tenPhim"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nhập tên phim"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.tenPhim}
                    />
                </div>
                <div>
                    <label
                        htmlFor="trailer"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Trailer
                    </label>
                    <input
                        type="text"
                        id="trailer"
                        name="trailer"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nhập trailer"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.trailer}
                    />
                </div>
                <div>
                    <label
                        htmlFor="moTa"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Mô tả
                    </label>
                    <input
                        type="text"
                        id="moTa"
                        name="moTa"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nhập mô tả"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.moTa}
                    />
                </div>
                <div>
                    <label
                        htmlFor="ngayChieu"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Ngày chiếu
                    </label>
                    <DatePicker
                        onChange={(date, dateString) => {
                            // console.log(date);
                            console.log(dateString);
                            setFieldValue("ngayChieu", dateString);
                        }}
                        id="ngayChieu"
                        format={"DD-MM-YYYY"}
                    />
                </div>
                <div>
                    <label
                        htmlFor="dangChieu"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Đang chiếu
                    </label>
                    <Switch
                        id="dangChieu"
                        onChange={(checked) => {
                            setFieldValue("dangChieu", checked);
                        }}
                        checked={values.dangChieu}
                    />
                </div>
                <div>
                    <label
                        htmlFor="sapChieu"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Sắp chiếu
                    </label>
                    <Switch
                        id="sapChieu"
                        onChange={(checked) => {
                            setFieldValue("sapChieu", checked);
                        }}
                        checked={values.sapChieu}
                    />
                </div>
                <div>
                    <label
                        htmlFor="hot"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Hot
                    </label>
                    <Switch
                        id="hot"
                        onChange={(checked) => {
                            setFieldValue("hot", checked);
                        }}
                        checked={values.hot}
                    />
                </div>
                <div>
                    <label
                        htmlFor="danhGia"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Số sao
                    </label>
                    <Rate
                        id="danhGia"
                        onChange={(number) => {
                            setFieldValue("danhGia", number);
                        }}
                        value={values.danhGia}
                    />
                </div>
                <div>
                    <label
                        htmlFor="hinhAnh"
                        className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                        Số sao
                    </label>
                    <input
                        type="file"
                        name="hinhAnh"
                        onChange={(event) => {
                            console.log(event.target.files);
                            setFieldValue("hinhAnh", event.target.files[0]);
                        }}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="py-2 px-5 bg-blue-500 text-white rounded-md"
                    >
                        Thêm phim
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormAddMovie;
