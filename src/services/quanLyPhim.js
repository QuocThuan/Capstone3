import { https } from "./config";

export const quanLyPhimServ = {
  getAllBanner: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachBanner");
  },
  getAllMovie: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  deleteMovie: (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
  themPhim: (frm) => {
    return https.post('/api/QuanLyPhim/ThemPhimUploadHinh', frm);
  }
};
