import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blood: "",
    when: "",
};

const vomitSlice = createSlice({
    name: 'vomit',
    initialState,
    reducers: {
        setBlood: (state, action) => {
            console.log('setBlood action called with payload:', action.payload);
            state.blood = action.payload;
        },
        setWhen: (state, action) => {
            console.log('setWhen action called with payload:', action.payload);
            state.when = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.blood = '';
            state.when = '';
        }
    }
});

export const { setBlood, setWhen, clearAll } = vomitSlice.actions;
export default vomitSlice.reducer;