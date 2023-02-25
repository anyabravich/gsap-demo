import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu: false,
  },
  reducers: {
    openMenu(state, action) {
      state.menu = !action.payload.isOpenMenu;
    },
  },
});

export const { openMenu } = menuSlice.actions;
export default menuSlice.reducer;
