import { https } from "./config";

export const quanLyRapServ = {
  getThongTinHeThongRap: () => {
    return https.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  getLayThongTinLichChieu: (maHeThongRap) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    );
  },
};
