import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginLayout from "./components/layout/LoginLayout";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/login/Register";
import HomeLayout from "./components/layout/HomeLayout";
import Home from "./components/pages/home/Home";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/" element={< HomeLayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
