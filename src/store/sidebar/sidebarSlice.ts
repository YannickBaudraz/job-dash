import { createSlice } from '@reduxjs/toolkit';
import State = Sidebar.State;

const initialState: State = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },
    open: state => {
      state.isOpen = true;
    },
    close: state => {
      state.isOpen = false;
    },
  },
});

export namespace Sidebar {
  export type State = {
    isOpen: boolean;
  };

  export const Actions = sidebarSlice.actions;
  export const reducer = sidebarSlice.reducer;
}

export default sidebarSlice;
