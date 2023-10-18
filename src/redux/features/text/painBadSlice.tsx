import { createSlice } from '@reduxjs/toolkit';

const painBadSlice = createSlice({
    name: 'painbad',
    initialState: '',
    reducers: {
        setPainBad: (_, action) => {
            console.log('setPainBad action called with payload:', action.payload);
            return action.payload;
        }
    }
});

export const { setPainBad } = painBadSlice.actions;
export default painBadSlice.reducer;
