import { configureStore, combineReducers } from '@reduxjs/toolkit'
import textEntryReducer from './features/text/textSlice'
import assistSliceReducer from './features/text/assistSlice';
import painSliceReducer from './features/text/painSlice';
import assessmentSliceReducer from './features/text/assessmentSlice';
import personalSliceReducer from './features/text/personalSlice';
import allergiesSliceReducer from './features/text/allergiesSlice';
import drugSliceReducer from './features/text/drugSlice';
import conditionSliceReducer from './features/text/conditionSlice';
import mentalSliceReducer from './features/text/mentalSlice';
import painFeelSliceReducer from './features/text/painFeelSlice';
import painBadSliceReducer from './features/text/painBadSlice';
import illnessSliceReducer from './features/text/illnessSlice';
import intakeSliceReducer from './features/text/intakeSlice';
import vomitSliceReducer from './features/text/vomitSlice';
import bathroomSliceReducer from './features/text/bathroomSlice';
import signsSliceReducer from './features/text/signsSlice';


const rootReducer = combineReducers({
    textEntry: textEntryReducer,
    assistSlice: assistSliceReducer,
    painSlice: painSliceReducer,
    assessmentSlice: assessmentSliceReducer,
    personalSlice: personalSliceReducer,
    allergiesSlice: allergiesSliceReducer,
    drugSlice: drugSliceReducer,
    conditionSlice: conditionSliceReducer,
    mentalSlice: mentalSliceReducer,
    painFeelSlice: painFeelSliceReducer,
    painBadSlice: painBadSliceReducer,
    illnessSlice: illnessSliceReducer,
    intakeSlice: intakeSliceReducer,
    vomitSlice: vomitSliceReducer,
    bathroomSlice: bathroomSliceReducer,
    signsSlice: signsSliceReducer,
});

export const store = configureStore({
    reducer: rootReducer
})

console.log(store.getState());


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch