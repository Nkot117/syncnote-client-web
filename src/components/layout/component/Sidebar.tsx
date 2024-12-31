import { Box, Drawer, ListItemButton, Typography } from "@mui/material";
import { useMemos } from "../../../hooks/useMemos";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const memos = useMemos();
  const [activeMemoIndex, setActiveMemoIndex] = useState(0)
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const index = memos.findIndex((memo) => memo.id === id);
    setActiveMemoIndex(index);
  }, [navigate]);

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{ width: 250, height: "100vh" }}
    >
      <Box sx={{ padding: 2, backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
        {memos.map((memo, index) => (
          <ListItemButton
            key={memo.id}
            sx={{ pl: "20px" }}
            style={{ borderBottom: "1px solid #ccc" }}
            component={Link}
            to={`/memo/${memo.id}`}
            selected={index === activeMemoIndex}
          >
            <Typography>{memo.title}</Typography>
          </ListItemButton>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
