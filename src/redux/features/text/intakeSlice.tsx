import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    when: "",
    what: "",
};

const intakeSlice = createSlice({
    name: 'intake',
    initialState,
    reducers: {
        setWhen: (state, action) => {
            console.log('setWhen action called with payload:', action.payload);
            state.when = action.payload;
        },
        setWhat: (state, action) => {
            console.log('setWhat action called with payload:', action.payload);
            state.what = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.when = '';
            state.what = '';
        }
    }
});

export const { setWhen, setWhat, clearAll } = intakeSlice.actions;
export default intakeSlice.reducer;