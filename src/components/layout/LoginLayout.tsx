import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LoginLayout = () => {
  console.log("LoginLayout Render");
  const navigate = useNavigate();
  useEffect(() => {
    const currentUrl = window.location.href;
    console.log("現在のパス" + currentUrl)
    const urlParams = new URLSearchParams(window.location.search);
    const pathParam = urlParams.get('path');
    console.log("パラメータ" + pathParam)
    // if(pathParam) {
    //   navigate("/" + pathParam)
    // }
  }, [navigate]);
  return (
    <>
      <Container
        maxWidth="xs"
        sx={{
          mt: 15,
        }}
      >
        <Outlet />
      </Container>
    </>
  );
};

export default LoginLayout;
