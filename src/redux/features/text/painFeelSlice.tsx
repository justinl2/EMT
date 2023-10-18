import { createSlice } from '@reduxjs/toolkit';

const painFeelSlice = createSlice({
    name: 'painfeel',
    initialState: '',
    reducers: {
        setPainFeel: (_, action) => {
            console.log('setPainFeel action called with payload:', action.payload);
            return action.payload;
        }
    }
});

export const { setPainFeel } = painFeelSlice.actions;
export default painFeelSlice.reducer;
