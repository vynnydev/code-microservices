import { Request, Response, NextFunction } from 'express'

import { IMiddleware } from '@presentation/protocols/IMiddleware'

export const adaptMiddleware = (middleware: IMiddleware) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    const requestData = {
      access_token: request.headers?.['x-access-token'],
      ...(request.headers || {}),
    }

    const httpResponse = await middleware.handle(requestData, request.body)

    /**
     * Not an error, but stop request process
     */
    if (!httpResponse) {
      return response.status(200).send()
    }

    if (httpResponse.status_code === 200) {
      Object.assign(request, httpResponse.body)

      return next()
    } else {
      return response.status(httpResponse.status_code).json({
        error: httpResponse.body.error,
      })
    }
  }
}