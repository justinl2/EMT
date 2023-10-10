import { createSlice } from '@reduxjs/toolkit';

const input6Slice = createSlice({
    name: 'input6',
    initialState: '',
    reducers: {
        setInput6: (state, action) => {
            console.log('setInput6 action called with payload:', action.payload);
            return action.payload;
        }
    }
});

export const { setInput6 } = input6Slice.actions;
export default input6Slice.reducer;