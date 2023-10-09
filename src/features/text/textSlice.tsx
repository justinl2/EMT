import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
  name: 'text',
  initialState: '',
  reducers: {
    setText: (state, action) => {
      console.log('setText action called with payload:', action.payload);
      return action.payload;
    },
    clearText: (state) => {
      console.log('clearText action called');
      return '';
    }
  }
});

export const { setText, clearText } = textSlice.actions;
export default textSlice.reducer;
