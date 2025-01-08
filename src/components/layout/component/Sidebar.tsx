import {
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItemButton,
  Typography,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useMemos } from "../../../hooks/useMemos";
import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";

const Sidebar = () => {
  console.log("Sidebar Render");
  const memos = useMemos();
  const { id } = useParams();
  const activeMemoIndex = useMemo(() => {
    return memos.findIndex((memo) => memo.id === id);
  }, [id, memos]);

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{
        width: 250,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <IconButton color="primary">
          <AccountBoxIcon sx={{ fontSize: 30, color: "#007BFF" }} />
        </IconButton>
      </Box>

      <Box
        sx={{
          padding: 2,
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        {memos.map((memo, index) => (
          <Box key={memo.id}>
            <ListItemButton
              sx={{
                pl: 3,
                height: "50px",
                borderRadius: "8px",
                marginBottom: 1,
                transition: "background-color 0.3s ease",
                backgroundColor:
                  index === activeMemoIndex ? "#007BFF" : "transparent",
                "&:hover": {
                  backgroundColor: "#e9f5ff",
                },
              }}
              component={Link}
              to={`/memo/${memo.id}`}
              selected={index === activeMemoIndex}
            >
              <Typography
                sx={{
                  lineHeight: "50px",
                  color: index === activeMemoIndex ? "#ffffff" : "#333333",
                  fontWeight: index === activeMemoIndex ? "bold" : "normal",
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {memo.title.length > 10
                  ? `${memo.title.substring(0, 10)}...`
                  : memo.title}
              </Typography>
            </ListItemButton>

            {index < memos.length - 1 && (
              <Divider sx={{ borderColor: "#ccc", marginY: 1 }} />
            )}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
