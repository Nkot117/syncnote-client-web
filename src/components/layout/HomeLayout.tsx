import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const HomeLayout = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1, p: 1, width: "max-content" }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default HomeLayout;