import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    foods: "",
    medications: "",
    environmental: "",
    other: ""
};

const allergySlice = createSlice({
    name: 'pain',
    initialState,
    reducers: {
        setFood: (state, action) => {
            console.log('setFood action called with payload:', action.payload);
            state.foods = action.payload;
        },
        setMedication: (state, action) => {
            console.log('setMedication action called with payload:', action.payload);
            state.medications = action.payload;
        },
        setEnvironment: (state, action) => {
            console.log('setEnvironment action called with payload:', action.payload);
            state.environmental = action.payload;
        },
        setOther: (state, action) => {
            console.log('setOther action called with payload:', action.payload);
            state.other = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.foods = '';
            state.medications = '';
            state.environmental = '';
            state.other = '';
        }
    }
});

export const { setFood, setMedication, setEnvironment, setOther, clearAll } = allergySlice.actions;
export default allergySlice.reducer;
