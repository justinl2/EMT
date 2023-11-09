import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lighthead: "",
    other: "",
};

const signsSlice = createSlice({
    name: 'signs',
    initialState,
    reducers: {
        setLighthead: (state, action) => {
            console.log('setLighthead action called with payload:', action.payload);
            state.lighthead = action.payload;
        },
        setOther: (state, action) => {
            console.log('setOther action called with payload:', action.payload);
            state.other = action.payload;
        }
    }
});

export const { setLighthead, setOther } = signsSlice.actions;
export default signsSlice.reducer;