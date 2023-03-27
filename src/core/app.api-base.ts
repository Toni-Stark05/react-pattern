import axios, { AxiosError, AxiosResponse } from 'axios'

import { IApiError } from './app.api'

export const INTERNAL_SERVER_ERROR = {
  code: 500,
  message: 'Internal Server Error',
}

abstract class ApiBase {
  resolveError(e: unknown): IApiError {
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError<IApiError>
      const response = error.response as AxiosResponse<IApiError>
      return response.data || INTERNAL_SERVER_ERROR
    }

    return INTERNAL_SERVER_ERROR
  }
}

export default ApiBase
