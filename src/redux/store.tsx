import { configureStore, combineReducers } from '@reduxjs/toolkit'
import textEntryReducer from '../features/text/textSlice'
import input6Reducer from '../features/text/input6Slice';

const rootReducer = combineReducers({
    textEntry: textEntryReducer,
    input6: input6Reducer
});

export const store = configureStore({
    reducer: rootReducer
    /*
    reducer: {
        textEntry: textEntryReducer,
    },
    */
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch