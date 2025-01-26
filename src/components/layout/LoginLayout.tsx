import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LoginLayout = () => {
  console.log("LoginLayout Render");
  const navigate = useNavigate();
  useEffect(() => {
    const currentUrl = window.location.href;
    console.log("log:" + currentUrl);
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
