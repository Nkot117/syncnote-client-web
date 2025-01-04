import { Box, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { useNavigate } from "react-router";
import { useMemos } from "../../../hooks/useMemos";
import { createMemo } from "../../../store/modules/memo";

const Home = () => {
  console.log("Home Render")
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isClickButton = useRef(false);
  const memos = useMemos();

  const clickCreateMemoButton = () => {
    isClickButton.current = true;
    dispatch(createMemo());
  };

  useEffect(() => {
    if (isClickButton.current) {
      isClickButton.current = false;
      navigate(`/memo/${memos[0].id}`);
    }
  }, [memos]);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button variant="outlined" onClick={clickCreateMemoButton}>
        新しいメモを作成する
      </Button>
    </Box>
  );
};

export default Home;
