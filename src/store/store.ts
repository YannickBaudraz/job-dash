import { configureStore } from '@reduxjs/toolkit';
import { Document } from './document/documentSlice';
import { Sidebar } from './sidebar/sidebarSlice';

const store = configureStore({
  reducer: {
    document: Document.reducer,
    sidebar: Sidebar.reducer,
  },
});

export default store;
