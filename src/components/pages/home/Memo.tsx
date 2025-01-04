import { Box, IconButton, TextField } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
  const [memo, setMemo] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (memos.length === 0) return;
    const displayMemo = memos.find((memo) => memo.id === id);
    if (!displayMemo) return;
    setMemo({
      title: displayMemo.title,
      content: displayMemo.content,
    });
  }, [id, memos]);

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setMemo({ ...memo, title: newTitle });
  };

  const updateContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setMemo({ ...memo, content: newContent });
  };

  const sendUpdate = () => {
    if (!id) return;
    const updatedMemo = {
      title: memo.title,
      content: memo.content,
    };
    dispatch(updateMemo({ id, memo: updatedMemo }));
  };

  const sendDelete = async () => {
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
        <IconButton onClick={clickCreateMemoButton}>
          <NoteAddIcon />
        </IconButton>

        <IconButton onClick={sendDelete}>
          <DeleteOutlinedIcon />
        </IconButton>
      </Box>

      <Box sx={{ padding: "10px 50px" }}>
        <TextField
          placeholder="無題"
          variant="outlined"
          fullWidth
          value={memo.title}
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
          value={memo.content}
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
