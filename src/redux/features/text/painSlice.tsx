import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    when: "",
    better: "",
    where: ""
};

const painSlice = createSlice({
    name: 'pain',
    initialState,
    reducers: {
        setWhen: (state, action) => {
            console.log('setWhen action called with payload:', action.payload);
            state.when = action.payload;
        },
        setBetter: (state, action) => {
            console.log('setBetter action called with payload:', action.payload);
            state.better = action.payload;
        },
        setWhere: (state, action) => {
            console.log('setWhere action called with payload:', action.payload);
            state.where = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.when = '';
            state.better = '';
            state.where = '';
        },
    }
});

export const { setWhen, setBetter, setWhere, clearAll } = painSlice.actions;
export default painSlice.reducer;
