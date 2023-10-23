import { https } from "./config";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
};
