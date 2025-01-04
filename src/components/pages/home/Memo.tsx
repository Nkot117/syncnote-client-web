import { Box, IconButton, TextField } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {
  createMemo,
  deleteMemo,
  updateMemo,
} from "../../../store/modules/memo";

const Memo = () => {
  console.log("Memo Render")
  const { id } = useParams();
  const memos = useAppSelector((state) => state.memo);
  const dispatch = useAppDispatch();
  const isClickButton = useRef(false);
  const navigate = useNavigate();

  const memo = useMemo(() => {
    return memos.find((memo) => memo.id === id) || { title: "", content: "" };
  }, [id, memos]);

  const [localMemo, setLocalMemo] = useState({
    title: memo.title,
    content: memo.content,
  });

  useEffect(() => {
    setLocalMemo({
      title: memo.title,
      content: memo.content,
    });
  }, [memo]);

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setLocalMemo({ ...localMemo, title: newTitle });
  };

  const updateContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setLocalMemo({ ...localMemo, content: newContent });
  };

  const sendUpdate = () => {
    if (!id) return;
    const updatedMemo = {
      title: localMemo.title,
      content: localMemo.content,
    };
    dispatch(updateMemo({ id, memo: updatedMemo }));
  };

  const sendDelete = () => {
    if (!id) return;
    dispatch(deleteMemo({ id }));
    navigate("/");
  };

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
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 50px",
        }}
      >
        <IconButton onClick={clickCreateMemoButton} color="primary">
          <NoteAddIcon />
        </IconButton>

        <IconButton onClick={sendDelete} color="error">
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>

      <Box sx={{ padding: "10px 50px" }}>
        <TextField
          placeholder="無題"
          variant="outlined"
          fullWidth
          value={localMemo.title}
          onChange={updateTitle}
          onBlur={sendUpdate}
          sx={{
            ".MuiOutlinedInput-input": { padding: 0 },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            ".MuiOutlinedInput-root": { fontSize: "2rem", fontWeight: "bold" },
          }}
        />
        <TextField
          placeholder="..."
          variant="outlined"
          fullWidth
          value={localMemo.content}
          onChange={updateContent}
          onBlur={sendUpdate}
          sx={{
            ".MuiOutlinedInput-input": { padding: 0 },
            ".MuiOutlinedInput-notchedOutline": { border: "none" },
            ".MuiOutlinedInput-root": { fontSize: "1rem" },
            marginTop: "20px",
          }}
        />
      </Box>
    </>
  );
};

export default Memo;
