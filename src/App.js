import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserTemplate from "./templates/UserTemplate/UserTemplate";
import Login from "./pages/Login/Login.js";
import AdminTemple from "./templates/AdminTemple/AdminTemple";
import MangerMovie from "./pages/MangerMovie/MangerMovie";
import ManagerAddMovie from "./pages/ManagerAddMovie/ManagerAddMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminTemple />}>
          <Route path="manager-movie" element={<MangerMovie />} />
          <Route path="manager-add-movie" element={<ManagerAddMovie />} />
        </Route>
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
