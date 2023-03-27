import Api from '../../core/app.api'

import { IUser } from './users.model'

const UsersService = (api: typeof Api) => ({
  fetchAll: async () => {
    return api.get<IUser[]>('users')
  },
  // fetchById: async (id: string) => {
  //   return api.get<IUser>(`users/${id}`)
  // },
  // updateById: async (id: string, data: Partial<IUser>) => {
  //   return api.patch<IUser>(`users/${id}`, { data })
  // },
  // deleteById: async (id: string) => {
  //   return api.delete<IUser>(`users/${id}`)
  // },
})

export default UsersService
