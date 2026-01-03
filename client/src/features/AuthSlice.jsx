import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; 
    },
    isLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { isLogin, isLogout } = authSlice.actions;
export default authSlice.reducer;
