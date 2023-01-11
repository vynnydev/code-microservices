import { IHttpResponse } from './IHttp'

export interface IMiddleware<T = any, U = any> {
  handle: (httpRequest: T, httpBody?: U) => Promise<IHttpResponse>
}