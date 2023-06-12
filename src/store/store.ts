import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

// store yra talpykla, kur visi duomenys yra 

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;