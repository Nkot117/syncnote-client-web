import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import memoApi from "../../api/features/memoApi";
import { MemoDetail } from "../../models/memo/MemoDetail";
import { MemoRequest } from "../../models/memo/MemoRequest";

const initialState: MemoDetail[] = [];

const memo = createSlice({
  name: "memo",
  initialState,
  reducers: {
    clearMemos: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAndSaveMemos.fulfilled, (_, action) => {
      if (!action.payload) {
        return initialState;
      }

      return action.payload
        .map((memo) => {
          return {
            id: memo.id,
            title: memo.title,
            content: memo.content,
          };
        })
        .reverse();
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
    builder.addCase(updateMemo.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      const updatedMemo = action.payload;
      const newMemos = state.map((memo) => {
        if (memo.id === updatedMemo.id) {
          return {
            id: updatedMemo.id,
            title: updatedMemo.title,
            content: updatedMemo.content,
          };
        } else {
          return memo;
        }
      });

      return newMemos;
    });
    builder.addCase(deleteMemo.fulfilled, (state, action) => {
      if (!action.payload) {
        return;
      }

      const deleteMemoId = action.payload.id;
      return state.filter((memo) => memo.id !== deleteMemoId);
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

const updateMemo = createAsyncThunk<
  MemoDetail,
  {
    id: string;
    memo: MemoRequest;
  }
>("memo/updatedMemo", async ({ id, memo }) => {
  try {
    const updatedMemo = await memoApi.updateMemo(id, memo);
    return updatedMemo;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const deleteMemo = createAsyncThunk<{ id: string }, { id: string }>(
  "memo/deleteMemo",
  async ({ id }) => {
    try {
      await memoApi.deleteMemo(id);
      return { id };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export { getAndSaveMemos, createMemo, updateMemo, deleteMemo };
export const { clearMemos } = memo.actions;
export default memo.reducer;
