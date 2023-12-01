import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: '',
    savedtext: '',
};

const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setText: (state, action) => {
            console.log('setText action called with payload:', action.payload);
            state.text = action.payload;
        },
        clearText: (state) => {
            console.log('clearAll action called');
            state.text = '';
        },
        storeText: (state, action) => {
            console.log('storeText action called with payload:', action.payload);
            state.savedtext += action.payload + ' / ';
            state.text = '';
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.text = '';
            state.savedtext = '';
        },
    }
});

export const { setText, clearText, storeText, clearAll } = textSlice.actions;
export default textSlice.reducer;
