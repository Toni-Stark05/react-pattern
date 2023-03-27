import { createSlice } from '@reduxjs/toolkit'

import { APIStatus, IApiError } from '../../core/app.api'
import { fetchUsers } from './users.actions'

import { IUser } from './users.model'

const getInitialUsers = () => ({
  status: APIStatus.IDLE,
  items: [],
  error: null,
})

interface IUsersState {
  users: {
    status: APIStatus
    items: IUser[]
    error: IApiError | null
  }
}

const initialState: IUsersState = {
  users: getInitialUsers(),
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearUsers(state) {
      state.users = getInitialUsers()
    },
  },
  extraReducers: (builder) => {
    //  FETCH USERS
    builder.addCase(fetchUsers.pending, (state) => {
      state.users.status = APIStatus.PENDING
    })
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.users.items = [...state.users.items, ...payload]
      state.users.status = APIStatus.FULFILLED
    })
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.users.status = APIStatus.REJECTED
      if (payload) state.users.error = payload as IApiError
    })
  },
})

export const { clearUsers } = usersSlice.actions
