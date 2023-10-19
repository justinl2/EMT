import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    other: "",
};

const signsSlice = createSlice({
    name: 'signs',
    initialState,
    reducers: {
        setOther: (state, action) => {
            console.log('setOther action called with payload:', action.payload);
            state.other = action.payload;
        }
    }
});

export const { setOther } = signsSlice.actions;
export default signsSlice.reducer;