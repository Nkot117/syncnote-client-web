import { Box, IconButton, TextField } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

  // 表示対象のメモをStoreから取得してキャッシュとして保持
  const memo = useMemo(() => {
    return memos.find((memo) => memo.id === id) || { title: "", content: "" };
  }, [id, memos]);

  // 画面表示用の定数に格納
  const [displayMemo, setDisplayMemo,] = useState(memo);

  // memoが変化したときにdisplayMemoを更新
  useEffect(() => {
    setDisplayMemo(memo);
  }, [memo]);

  // フォームの入力を受け取って表示内容を更新する
  // useCallbackで再レンダリング時に新しい関数が生成されるのを防ぐ
  const updateField = useCallback(
    (field: "title" | "content") =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisplayMemo((prev) => ({ ...prev, [field]: e.target.value }));
      },
    []
  );

  // dispatchを使ってStoreを更新する
  // useCallbackで再レンダリング時に新しい関数が生成されるのを防ぐ
  // id、displayMemoの内容が変更されたら再生成する
  const sendUpdate = useCallback(() => {
    if (!id) return;
    dispatch(updateMemo({ id, memo: displayMemo }));
  }, [dispatch, id, displayMemo]);


  // dispatchを使ってStoreを更新する
  // useCallbackで再レンダリング時に新しい関数が生成されるのを防ぐ
  // idの内容が変更されたら再生成する
  const sendDelete = useCallback(() => {
    if (!id) return;
    dispatch(deleteMemo({ id }));
    navigate("/");
  }, [dispatch, id, navigate]);


  // dispatchを使ってStoreを更新する
  // useCallbackで再レンダリング時に新しい関数が生成されるのを防ぐ
  const clickCreateMemoButton = useCallback(() => {
    isClickButton.current = true;
    dispatch(createMemo());
  }, [dispatch]);


  // Storeのmemosが更新されたら遷移する
    useEffect(() => {
    if (isClickButton.current && memos.length > 0) {
      isClickButton.current = false;
      navigate(`/memo/${memos[0].id}`);
    }
  }, [memos, navigate]);

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
          value={displayMemo.title}
          onChange={updateField('title')}
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
          value={displayMemo.content}
          onChange={updateField('content')}
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
