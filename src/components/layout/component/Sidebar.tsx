import { Box, Drawer, ListItemButton, Typography } from "@mui/material";
import { useMemos } from "../../../hooks/useMemos";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  console.log("Sidebar Render")
  const memos = useMemos();
  const [activeMemoIndex, setActiveMemoIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const index = memos.findIndex((memo) => memo.id === id);
    setActiveMemoIndex(index);
  }, [id, memos]);

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
            sx={{ pl: "20px", height: "50px" }}
            style={{ borderBottom: "1px solid #ccc" }}
            component={Link}
            to={`/memo/${memo.id}`}
            selected={index === activeMemoIndex}
          >
            <Typography sx={{ lineHeight: "50px" }}>{memo.title}</Typography>
          </ListItemButton>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
