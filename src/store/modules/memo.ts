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
    }),
      builder.addCase(createMemo.fulfilled, (state, action) => {
        if (!action.payload) {
          return;
        }

        const newMemo = action.payload;
        return [
          {
            id: newMemo.id,
            title: newMemo.title,
            content: newMemo.content,
          },
          ...state,
        ];
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
const createMemo = createAsyncThunk("memo/createMemo", async () => {
  try {
    const newMemo = await memoApi.createMemo({
      title: "", content:"",
    });
    return newMemo.data;
  } catch (error) {
    console.error(error);
  }
});

export { getAndSaveMemos, createMemo };
export default memo.reducer;
