import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class BasicService {
  private options: AxiosRequestConfig
  public connection: AxiosInstance
  constructor(url: string) {
    console.log(url)
    this.options = {
      baseURL: url
    }

    this.connection = axios.create(this.options)

    this.connection.interceptors.response.use(
      config => {
        return config
      },
      error => {
        if (error && error.response.status === 401) {
          // logout quando ocorrer error 401
        }
        return Promise.reject(error)
      }
    )
  }
}

export default BasicService
