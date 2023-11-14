import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    polst: false,
    resuscitate: false,
};

const directivesSlice = createSlice({
    name: 'directives',
    initialState,
    reducers: {
        setPolst: (state, action) => {
            console.log('setPolst action called with payload:', action.payload);
            state.polst = action.payload;
        },
        setResuscitate: (state, action) => {
            console.log('setResuscitate action called with payload:', action.payload);
            state.resuscitate = action.payload;
        },
        clearAll: (state) => {
            console.log('clearAll action called');
            state.polst = false;
            state.resuscitate = false;
        }
    }
});

export const { setPolst, setResuscitate, clearAll } = directivesSlice.actions;
export default directivesSlice.reducer;
