import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: "",
  },
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
