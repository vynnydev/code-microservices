import { IHttpResponse } from './IHttpResponse'

export interface IMiddleware<T = any, U = any> {
  handle: (httpRequest: T, httpBody?: U) => Promise<IHttpResponse | false>
};