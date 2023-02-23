import { createSlice } from '@reduxjs/toolkit';
import State = Sidebar.State;

const initialState: State = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export namespace Sidebar {
  export interface State {
    isOpen: boolean;
  }

  export const Action = sidebarSlice.actions;
  export const reducer = sidebarSlice.reducer;
}

export default sidebarSlice;
