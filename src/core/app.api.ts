import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import UsersService from '../modules/users/users.service'

import ApiBase from './app.api-base'

import { API_URL } from './app.config'

export enum APIStatus {
  IDLE,
  PENDING,
  FULFILLED,
  REJECTED,
}

export interface IApiError {
  code: number
  message: string
}

export interface IApiData<T> {
  status: APIStatus
  data: T
  error: IApiError | null
}

class Api extends ApiBase {
  private api: AxiosInstance | null = null

  private async onRequestFullFilled(config: InternalAxiosRequestConfig) {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  }

  private onRequestRejected = (error: AxiosError) => Promise.reject(error)

  private async onResponseRejected(error: AxiosError) {
    return Promise.reject(error)
  }

  private async onResponseFullFilled(response: AxiosResponse) {
    return response
  }

  constructor() {
    super()

    this.api = axios.create({ baseURL: API_URL })

    this.api.interceptors.request.use(
      this.onRequestFullFilled.bind(this),
      this.onRequestRejected.bind(this)
    )
    this.api.interceptors.response.use(
      this.onResponseFullFilled.bind(this),
      this.onResponseRejected.bind(this)
    )
  }

  request<T>(args: AxiosRequestConfig) {
    if (!this.api) throw new Error('API is not defined')

    return this.api.request<T>(args)
  }

  post<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
    return this.request<T>({ url, method: 'POST', ...args })
  }

  get<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
    return this.request<T>({ url, method: 'GET', ...args })
  }

  patch<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
    return this.request<T>({ url, method: 'PATCH', ...args })
  }

  delete<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
    return this.request<T>({ url, method: 'DELETE', ...args })
  }

  put<T>(url: string, args: Omit<AxiosRequestConfig, 'method'> = {}) {
    return this.request<T>({ url, method: 'PUT', ...args })
  }

  get services() {
    return {
      users: UsersService(this),
    }
  }
}

export default new Api()
