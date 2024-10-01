import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginLayout from "./components/layout/LoginLayout";
import Login from "./components/pages/Login";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
