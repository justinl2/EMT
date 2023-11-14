import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blood: "",
    constipation: "",
    diarrhea: "",
    when: "",
};

const bathroomSlice = createSlice({
    name: 'bathroom',
    initialState,
    reducers: {
        setBlood: (state, action) => {
            console.log('setBlood action called with payload:', action.payload);
            state.blood = action.payload;
        },
        setConstipation: (state, action) => {
            console.log('setConstipation action called with payload:', action.payload);
            state.constipation = action.payload;
        },
        setDiarrhea: (state, action) => {
            console.log('setDiarrhea action called with payload:', action.payload);
            state.diarrhea = action.payload;
        },
        setWhen: (state, action) => {
            console.log('setWhen action called with payload:', action.payload);
            state.when = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.blood = '';
            state.constipation = '';
            state.diarrhea = '';
            state.when = '';
        }
    }
});

export const { setBlood, setConstipation, setDiarrhea, setWhen, clearAll } = bathroomSlice.actions;
export default bathroomSlice.reducer;