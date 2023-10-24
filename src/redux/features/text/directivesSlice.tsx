import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    resuscitate: false,
    intubate: false,
};

const directivesSlice = createSlice({
    name: 'directives',
    initialState,
    reducers: {
        setResuscitate: (state, action) => {
            console.log('setResuscitate action called with payload:', action.payload);
            state.resuscitate = action.payload;
        },
        setIntubate: (state, action) => {
            console.log('setIntubate action called with payload:', action.payload);
            state.intubate = action.payload;
        },
    }
});

export const { setResuscitate, setIntubate } = directivesSlice.actions;
export default directivesSlice.reducer;
