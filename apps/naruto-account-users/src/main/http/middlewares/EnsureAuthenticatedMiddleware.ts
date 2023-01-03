import { decode } from 'jsonwebtoken'

import { IMiddleware } from '@presentation/protocols/IMiddleware'

import { AccessDeniedError } from '../errors/AccessDeniedError'
import { forbidden, IHttpResponse, success } from '@presentation/protocols/IHttp'

type EnsureAuthenticatedMiddlewareRequest = {
  accessToken: string
}

type DecodedJwt = {
  sub: string
}

export class EnsureAuthenticatedMiddleware implements IMiddleware {
  constructor() {}

  async handle(
    request: EnsureAuthenticatedMiddlewareRequest
  ): Promise<IHttpResponse> {
    try {
      const { accessToken } = request

      if (accessToken) {
        try {
          const decoded = decode(accessToken) as DecodedJwt

          return success({ user_id: decoded.sub })
        } catch (err) {
          return forbidden(new AccessDeniedError())
        }
      }

      return forbidden(new AccessDeniedError())
    } catch (error) {
      return fail(error)
    }
  }
}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}
