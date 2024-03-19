import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  isOpenMenu: boolean;
}

const initialState: MenuState = {
  isOpenMenu: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpenMenu = true;
    },
    closeMenu: (state) => {
      state.isOpenMenu = false;
    },
  },
});

export const { openMenu, closeMenu } = menuSlice.actions;
export const selectIsOpenMenu = (state: { menu: MenuState }) =>
  state.menu.isOpenMenu;
export default menuSlice.reducer;
