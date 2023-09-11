import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null, profilePicture: null },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.profilePicture = action.payload.profilePicture;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.profilePicture = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
