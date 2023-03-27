import { createAsyncThunk } from '@reduxjs/toolkit'

import api, { IApiError } from '../../core/app.api'
import { IUser } from './users.model'

export interface IFilmQueryAttr {
  genre_ptr?: number
  limit?: number
  offset?: number
}

export const fetchUsers = createAsyncThunk<IUser[], void, { rejectValue: IApiError }>(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data: items } = await api.services.users.fetchAll()

      return items
    } catch (e) {
      return thunkAPI.rejectWithValue(api.resolveError(e))
    }
  }
)
