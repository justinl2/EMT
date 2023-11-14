import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    diabetes: "",
    breathing: "",
    sexual: "",
    pregnant: "",
    other: ""
};

const conditionSlice = createSlice({
    name: 'condition',
    initialState,
    reducers: {
        setDiabetes: (state, action) => {
            console.log('setDiabetes action called with payload:', action.payload);
            state.diabetes = action.payload;
        },
        setBreathing: (state, action) => {
            console.log('setBreathing action called with payload:', action.payload);
            state.breathing = action.payload;
        },
        setSexual: (state, action) => {
            console.log('setSexual action called with payload:', action.payload);
            state.sexual = action.payload;
        },
        setPregnant: (state, action) => {
            console.log('setNarcotics action called with payload:', action.payload);
            state.pregnant = action.payload;
        },
        setOther: (state, action) => {
            console.log('setNarcotics action called with payload:', action.payload);
            state.other = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.diabetes = '';
            state.breathing = '';
            state.sexual = '';
            state.pregnant = '';
            state.other = '';
        }
    }
});

export const { setDiabetes, setBreathing, setSexual, setPregnant, setOther, clearAll } = conditionSlice.actions;
export default conditionSlice.reducer;
