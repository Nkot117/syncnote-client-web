import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
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
