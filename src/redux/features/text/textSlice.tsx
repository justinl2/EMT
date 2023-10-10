import { createSlice } from '@reduxjs/toolkit';

const textSlice = createSlice({
    name: 'text',
    initialState: '',
    reducers: {
        setText: (_, action) => {
            console.log('setText action called with payload:', action.payload);
            return action.payload;
        },
        clearText: (_) => {
            console.log('clearText action called');
            return '';
        }
    },
});

export const {
    setText,
    clearText
} = textSlice.actions;
export default textSlice.reducer;
