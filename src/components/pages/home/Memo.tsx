import { Box, IconButton, TextField } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMemos } from "../../../hooks/useMemos";
import { useAppDispatch } from "../../../hooks/hooks";
import { updateMemo } from "../../../store/modules/memo";

const Memo = () => {
  const { id } = useParams();
  const memos = useMemos();
  const dispatch = useAppDispatch();
  const [memo, setMemo] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (memos.length === 0) return;
    const displayMemo = memos.find((memo) => memo.id === id);
    if (!displayMemo) return;
    setMemo({
      title: displayMemo.title,
      content: displayMemo.content,
    });
  }, [id]);

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

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px 50px",
        }}
      >
        <IconButton>
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
