import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LoginLayout = () => {
  console.log("LoginLayout Render");
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const pathParam = urlParams.get('path');
    console.log("pathParam：" + pathParam)
    if(pathParam) {
      navigate(pathParam)
    }
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
