import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    token: null,
    username: null,
    email: null,
    password: null,
    firstName: null,
    lastName: null,
    birthday: { day: null, month: null, year: null },
    instrumentPlayed: [],
    instrumentTaught: [],
    genresPlayed: [],
    genresLiked: [],
    description: "",
  },
};

export const userSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    firstStep: (state, action) => {
      state.value.username = action.payload.username;
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
    },
    secondStep: (state, action) => {
      state.value.firstName = action.payload.firstName;
      state.value.lastName = action.payload.lastName;
      state.value.birthday = action.payload.birthday;
    },
    thirdStep: (state, action) => {
      state.value.instrumentPlayed = action.payload.instrumentPlayed;
      state.value.instrumentTaught = action.payload.instrumentTaught;
      state.value.genresPlayed = action.payload.genresPlayed;
      state.value.genresLiked = action.payload.genresLiked;
    },
    lastStep: (state, action) => {
      state.value.description = action.payload.description;
    },
  },
});

export const { firstStep, secondStep, thirdStep, lastStep } = userSlice.actions;
export default userSlice.reducer;
