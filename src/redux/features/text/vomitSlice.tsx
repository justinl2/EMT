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
        }
    }
});

export const { setBlood, setWhen } = vomitSlice.actions;
export default vomitSlice.reducer;