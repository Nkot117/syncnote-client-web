import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

import LoginLayout from "./components/layout/LoginLayout";
import Login from "./components/pages/Login";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0000ff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
