import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginLayout from "./components/layout/LoginLayout";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/login/Register";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/pages/home/Home";
import Memo from "./components/pages/home/Memo";

const BASE_NAME = "/syncnote-client-web/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BASE_NAME} element={<LoginLayout />}>
          <Route path={BASE_NAME + "login"} element={<Login />} />
          <Route path={BASE_NAME + "register"} element={<Register />} />
        </Route>
        <Route path={BASE_NAME} element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path={BASE_NAME + "memo"} element={<Home />} />
          <Route path={BASE_NAME + "memo/:id"} element={<Memo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
