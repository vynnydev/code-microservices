import { decode } from 'jsonwebtoken'

import { IMiddleware } from '@presentation/protocols/IMiddleware'

import { AccessDeniedError } from '../errors/AccessDeniedError'
import { forbidden, IHttpRequest, IHttpResponse, success } from '@presentation/protocols/IHttp'

type DecodedJwt = {
  sub: string
}

export class EnsureAuthenticatedMiddleware implements IMiddleware {
  constructor() {}

  async handle(
    { headers }: IHttpRequest
  ): Promise<IHttpResponse> {
    try {
      const { access_token } = headers

      if (access_token) {
        try {
          const decoded = decode(access_token) as DecodedJwt

          return success({ account_id: decoded.sub })
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
    access_token?: string
  }
}
