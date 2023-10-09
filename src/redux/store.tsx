import { configureStore } from '@reduxjs/toolkit'
import textEntryReducer from '../features/text/textSlice'

export const store = configureStore({
  reducer: {
    textEntry: textEntryReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch