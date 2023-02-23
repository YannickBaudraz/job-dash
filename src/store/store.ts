import { configureStore } from '@reduxjs/toolkit';
import { Sidebar } from './sidebar/sidebarSlice';

const store = configureStore({
  reducer: {
    sidebar: Sidebar.reducer,
  },
});

export default store;
