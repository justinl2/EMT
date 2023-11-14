import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    where: "",
    weekday: ""
};

const assessmentSlice = createSlice({
    name: 'assessment',
    initialState,
    reducers: {
        setName: (state, action) => {
            console.log('setName action called with payload:', action.payload);
            state.name = action.payload;
        },
        setWhere: (state, action) => {
            console.log('setWhere action called with payload:', action.payload);
            state.where = action.payload;
        },
        setWeekday: (state, action) => {
            console.log('setWeekday action called with payload:', action.payload);
            state.weekday = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.name = '';
            state.where = '';
            state.weekday = '';
        }
    }
});

export const { setName, setWhere, setWeekday, clearAll } = assessmentSlice.actions;
export default assessmentSlice.reducer;
