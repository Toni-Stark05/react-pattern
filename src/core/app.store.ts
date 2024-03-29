import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { usersSlice } from '../modules/users/users.slice'

export const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>
