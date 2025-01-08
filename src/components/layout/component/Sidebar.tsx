import {
  Box,
  Divider,
  Drawer,
  IconButton,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useMemos } from "../../../hooks/useMemos";
import { Link, useParams } from "react-router-dom";
import { useMemo, useState } from "react";

const Sidebar = () => {
  console.log("Sidebar Render");
  const [isAccountMenu, setIsAccountMenu] = useState(false);
  const memos = useMemos();
  const { id } = useParams();
  const activeMemoIndex = useMemo(() => {
    return memos.findIndex((memo) => memo.id === id);
  }, [id, memos]);

  const handleToggleMenu = () => {
    setIsAccountMenu((prev) => !prev);
  };

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
      {/* ヘッダー部分 */}
      <Box
        sx={{
          width: 250,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          backgroundColor: "#f5f5f5",
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {isAccountMenu ? (
          <IconButton color="primary" onClick={handleToggleMenu}>
            <ArrowBackIcon sx={{ fontSize: 30, color: "#007BFF" }} />
          </IconButton>
        ) : (
          <IconButton color="primary" onClick={handleToggleMenu}>
            <AccountBoxIcon sx={{ fontSize: 30, color: "#007BFF" }} />
          </IconButton>
        )}
      </Box>

      {!isAccountMenu ? (
        // メモ一覧メニュー
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
                  {memo.title.length > 20
                    ? `${memo.title.substring(0, 20)}...`
                    : memo.title}
                </Typography>
              </ListItemButton>

              {index < memos.length - 1 && (
                <Divider sx={{ borderColor: "#ccc", marginY: 1 }} />
              )}
            </Box>
          ))}
        </Box>
      ) : (
        // アカウントメニュー
        <Box
          sx={{
            padding: 2,
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
          }}
        >
          <ListItemButton
            sx={{
              pl: 3,
              height: "50px",
              borderRadius: "8px",
              marginBottom: 1,
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#e9f5ff",
              },
            }}
          >
            <Typography
              sx={{
                lineHeight: "50px",
                color: "#333333",
                fontWeight: "normal",
                fontSize: "1rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              ログアウト
            </Typography>
          </ListItemButton>
          <Divider sx={{ borderColor: "#ccc", marginY: 1 }} />
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                pl: 3,
                height: "50px",
                borderRadius: "8px",
                marginBottom: 1,
                transition: "background-color 0.3s ease",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "#e9f5ff",
                },
              }}
            >
              <Typography
                sx={{
                  lineHeight: "50px",
                  color: "red",
                  fontWeight: "normal",
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                アカウント削除
              </Typography>
            </ListItemButton>
          </ListItem>
        </Box>
      )}
    </Drawer>
  );
};

export default Sidebar;
