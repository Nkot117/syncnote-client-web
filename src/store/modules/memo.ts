import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memoApi from "../../api/features/memoApi";

const initialState = [
  {
    id: "",
    title: "",
    content: "",
  },
];

const memo = createSlice({
  name: "memo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAndSaveMemos.fulfilled, (_, action) => {
      if (action.payload === null) {
        return initialState;
      } else {
        return action.payload.map((memo) => {
          return {
            id: memo.id,
            title: memo.title,
            content: memo.content,
          };
        });
      }
    });
  },
});

const getAndSaveMemos = createAsyncThunk("memo/getAndSaveMemos", async () => {
  try {
    const memos = await memoApi.getMemoList();
    return memos.memoList;
  } catch (error) {
    console.error(error);
    return null;
  }
});

export { getAndSaveMemos };
export default memo.reducer;
