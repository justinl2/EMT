import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    whathappened: "",
    other: "",
};

const illnessSlice = createSlice({
    name: 'illness',
    initialState,
    reducers: {
        setWhatHappened: (state, action) => {
            console.log('setWhatHappened action called with payload:', action.payload);
            state.whathappened = action.payload;
        },
        setOther: (state, action) => {
            console.log('setOther action called with payload:', action.payload);
            state.other = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.whathappened = '';
            state.other = '';
        }
    }
});

export const { setWhatHappened, setOther, clearAll } = illnessSlice.actions;
export default illnessSlice.reducer;