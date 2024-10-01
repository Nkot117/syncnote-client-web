import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginLayout from "./components/layout/LoginLayout";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
