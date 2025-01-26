import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./component/Sidebar";
import authHelper from "../../helpers/authHelper";
import { useEffect } from "react";

const HomeLayout = () => {
  console.log("HomeLayout Render");
  const navigate = useNavigate();

  useEffect(() => {
    if (authHelper.getAccessToken() === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default HomeLayout;
