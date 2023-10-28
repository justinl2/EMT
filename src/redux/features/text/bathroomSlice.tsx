import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    when: "",
};

const bathroomSlice = createSlice({
    name: 'bathroom',
    initialState,
    reducers: {
        setWhen: (state, action) => {
            console.log('setWhen action called with payload:', action.payload);
            state.when = action.payload;
        }
    }
});

export const { setWhen } = bathroomSlice.actions;
export default bathroomSlice.reducer;