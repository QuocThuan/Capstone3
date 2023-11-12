import React, { useEffect } from "react";
import { Space, Table, Popconfirm, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieApi } from "../../redux/slices/phimSlice";
import { quanLyPhimServ } from "../../services/quanLyPhim";

const TableMovie = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const columns = [
        {
            title: "Mã Phim",
            dataIndex: "maPhim",
            key: "name",
            render: (text) => <a>{text}</a>,
        },
        {
            title: "Hình ảnh",
            dataIndex: "hinhAnh",
            key: "age",
            render: (listHinhAnh, record, index) => {
                return <img className="w-32 h-32 object-cover" src={listHinhAnh} />;
            },
        },
        {
            title: "Tên phim",
            dataIndex: "tenPhim",
        },
        {
            title: "Mô tả",
            dataIndex: "moTa",
            width: 600,
        },
        {
            title: "Hành động",
            dataIndex: "",
            render: (text, record, index) => {
                return (
                    <div className="space-x-4">
                        <Popconfirm
                            title="Bạn đang xóa phim"
                            description="Bạn có chắc muốn xóa phim?"
                            onConfirm={() => {
                                // lấy mã phim cần xóa
                                quanLyPhimServ
                                    .deleteMovie(record.maPhim)
                                    .then((res) => {
                                        // console.log(res),
                                        dispatch(getAllMovieApi());
                                        messageApi.success("Xóa thành công");
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }}
                            // onCancel={cancel}
                            okButtonProps={{ className: "bg-blue-500" }}
                            okText="Đồng ý"
                            cancelText="Không"
                        >
                            <button className="bg-red-400 py-1 px-3 rounded-md hover:bg-red-600 duration-300 text-white">
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </Popconfirm>

                        <button className="bg-black py-1 px-3 rounded-md hover:bg-opacity-70 duration-300 text-white">
                            <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                    </div>
                );
            },
        },
    ];
    const dispatch = useDispatch();
    const { arrPhim } = useSelector((state) => state.phimSlice);
    console.log(arrPhim);
    useEffect(() => {
        dispatch(getAllMovieApi());
    }, []);

    return (
        <>
            {contextHolder}
            <div>
                {" "}
                <Table columns={columns} dataSource={arrPhim} />{" "}
            </div>
        </>
    );
};

export default TableMovie;
