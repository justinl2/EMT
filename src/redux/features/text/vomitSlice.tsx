import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    when: "",
};

const vomitSlice = createSlice({
    name: 'vomit',
    initialState,
    reducers: {
        setWhen: (state, action) => {
            console.log('setWhen action called with payload:', action.payload);
            state.when = action.payload;
        }
    }
});

export const { setWhen } = vomitSlice.actions;
export default vomitSlice.reducer;