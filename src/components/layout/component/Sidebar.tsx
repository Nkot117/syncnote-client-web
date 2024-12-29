import {
  Box,
  Drawer,
  ListItemButton,
  Typography,
} from "@mui/material";

const memoList = [
  { id: 1, title: "初めてのメモ", content: "メモです" },
  { id: 2, title: "初めてのメモ", content: "メモです" },
  { id: 3, title: "初めてのメモ", content: "メモです" },
  { id: 4, title: "初めてのメモ", content: "メモです" },
  { id: 5, title: "初めてのメモ", content: "メモです" },
  { id: 6, title: "初めてのメモ", content: "メモです" },
];

const Sidebar = () => {
  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <Box sx={{ padding: 2, backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
        {memoList.map((memo) => (
          <ListItemButton
            key={memo.id}
            sx={{ pl: "20px" }}
            style={{ borderBottom: "1px solid #ccc" }}
          >
            <Typography>{memo.title}</Typography>
          </ListItemButton>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
