import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    DOB: {
        month: "",
        day: "",
        year: ""
    },
    insurance: ""
};

const personalSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        setName: (state, action) => {
            console.log('setName action called with payload:', action.payload);
            state.name = action.payload;
        },
        setDOB: (state, action) => {
            console.log('setDOB action called with payload:', action.payload);
            if (action.payload.month) state.DOB.month = action.payload.month;
            if (action.payload.day) state.DOB.day = action.payload.day;
            if (action.payload.year) state.DOB.year = action.payload.year;
        },
        setInsurance: (state, action) => {
            console.log('setInsurance action called with payload:', action.payload);
            state.insurance = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.name = '';
            state.DOB.month = '';
            state.DOB.day = '';
            state.DOB.year = '';
            state.insurance = '';
        }
    }
});

export const { setName, setDOB, setInsurance, clearAll } = personalSlice.actions;
export default personalSlice.reducer;
