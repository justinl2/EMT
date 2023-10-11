import { configureStore, combineReducers } from '@reduxjs/toolkit'
import textEntryReducer from './features/text/textSlice'
import input6Reducer from './features/text/input6Slice';
import painSliceReducer from './features/text/painSlice';
import assessmentSliceReducer from './features/text/assessmentSlice';
import personalSliceReducer from './features/text/personalSlice';
import allergiesSliceReducer from './features/text/allergiesSlice';
import drugSliceReducer from './features/text/drugSlice';

const rootReducer = combineReducers({
    textEntry: textEntryReducer,
    input6: input6Reducer,
    painSlice: painSliceReducer,
    assessmentSlice: assessmentSliceReducer,
    personalSlice: personalSliceReducer,
    allergiesSlice: allergiesSliceReducer,
    drugSlice: drugSliceReducer,
});

export const store = configureStore({
    reducer: rootReducer
    /*
    reducer: {
        textEntry: textEntryReducer,
    },
    */
})

console.log(store.getState());


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch