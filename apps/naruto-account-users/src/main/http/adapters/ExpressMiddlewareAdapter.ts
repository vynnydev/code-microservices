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
    if (httpResponse === false) {
      return response.status(200).send()
    }

    if (httpResponse.statusCode === 200) {
      Object.assign(request, httpResponse.body)

      return next()
    } else {
      return response.status(httpResponse.statusCode).json({
        error: httpResponse.body.error,
      })
    }
  }
}