import { configureStore } from '@reduxjs/toolkit';
import { Document } from './document/documentSlice';
import { Sidebar } from './sidebar/sidebarSlice';

const index = configureStore({
  reducer: {
    document: Document.reducer,
    sidebar: Sidebar.reducer,
  },
});

export default index;
