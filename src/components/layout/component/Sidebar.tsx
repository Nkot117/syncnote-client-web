import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
  const [isSholwLogoutDialog, setIsSholwLogoutDialog] = useState(false);
  const [isSholwAccountDeleteDialog, setIsSholwAccountDeleteDialog] = useState(false);
  const memos = useMemos();
  const { id } = useParams();
  const activeMemoIndex = useMemo(() => {
    return memos.findIndex((memo) => memo.id === id);
  }, [id, memos]);

  const handleToggleMenu = () => {
    setIsAccountMenu((prev) => !prev);
  };

  const handleOpenLogoutDialog = () => {
    setIsSholwLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setIsSholwLogoutDialog(false);
  };

  const handleLogoutAction = () => {
    handleCloseLogoutDialog();
  };

  const handleOpenAccountDeleteDialog = () => {
    setIsSholwAccountDeleteDialog(true);
  };

  const handleCloseAccountDeleteDialog = () => {
    setIsSholwAccountDeleteDialog(false);
  };

  const handleAccountDeleteAction = () => {
    handleCloseAccountDeleteDialog();
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
            onClick={handleOpenLogoutDialog}
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
            onClick={handleOpenAccountDeleteDialog}
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

      {/* ダイアログ */}
      <Dialog
        open={isSholwLogoutDialog}
        onClose={handleCloseLogoutDialog}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
          }}
        >
          ログアウト
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#555",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            ログアウトしますか？
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Button
            onClick={handleLogoutAction}
            sx={{
              width: "200px",
              backgroundColor: "#007BFF",
              color: "#fff",
              textTransform: "none",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#0056b3",
              },
              marginBottom: "10px"
            }}
          >
            ログアウト
          </Button>
          <Button
            onClick={handleCloseLogoutDialog}
            sx={{
              width: "200px",
              backgroundColor: "#f5f5f5",
              color: "#333",
              textTransform: "none",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "8px",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isSholwAccountDeleteDialog}
        onClose={handleAccountDeleteAction}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "12px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
          }}
        >
          アカウント削除
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              color: "#555",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            アカウントを削除しますか？<br />
            削除するとメモが全て消去されます。
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            flexDirection: "column", 
          }}
        >
          <Button
            onClick={handleAccountDeleteAction}
            sx={{
              width: "200px",
              backgroundColor: "#f32d06df",
              color: "#fff",
              textTransform: "none",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#b31200",
              },
              marginBottom: "10px"
            }}
          >
            削除
          </Button>
          <Button
            onClick={handleCloseAccountDeleteDialog}
            sx={{
              width: "200px",
              backgroundColor: "#f5f5f5",
              color: "#333",
              textTransform: "none",
              fontWeight: "bold",
              padding: "8px 20px",
              borderRadius: "8px",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "#e0e0e0",
              },
            }}
          >
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
    </Drawer>
  );
};

export default Sidebar;
