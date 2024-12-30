import { Box, Drawer, ListItemButton, Typography } from "@mui/material";
import { useMemos } from "../../../hooks/useMemos";

const Sidebar = () => {
  const memos = useMemos();

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <Box sx={{ padding: 2, backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
        {memos.map((memo) => (
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
