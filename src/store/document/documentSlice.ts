import State = Document.State;
import { createSlice } from '@reduxjs/toolkit';

const initialState: State = {
  title: '',
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export namespace Document {
  export type State = {
    title: string;
  };

  export const Actions = documentSlice.actions;
  export const reducer = documentSlice.reducer;
}

export default documentSlice;
