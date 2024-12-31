import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memoApi from "../../api/features/memoApi";
import { MemoDetail } from "../../models/memo/MemoDetail";

const initialState: MemoDetail[] = [
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
      if (!action.payload) {
        return initialState;
      }

      return action.payload.map((memo) => {
        return {
          id: memo.id,
          title: memo.title,
          content: memo.content,
        };
      });
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
    const response = await memoApi.getMemoList();
    return response.memoList;
  } catch (error) {
    console.error(error);
    return null;
  }
});

const createMemo = createAsyncThunk("memo/createMemo", async () => {
  try {
    return await memoApi.createMemo({
      title: "",
      content: "",
    });
  } catch (error) {
    console.error(error);
  }
});

export { getAndSaveMemos, createMemo };
export default memo.reducer;
