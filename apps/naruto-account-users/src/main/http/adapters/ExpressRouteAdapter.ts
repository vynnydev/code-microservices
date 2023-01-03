import { Request, Response } from 'express'

import { IController } from '@presentation/protocols/IController'

const routeAdapter = (controller: IController) => {
  return async (request: Request, response: Response) => {
    const requestData = {
      ...request.body,
      ...request.params,
      ...request.query,
    }

    const httpResponse = await controller.handle(requestData)

    if (httpResponse.status_code >= 200 && httpResponse.status_code <= 299) {
      return response.status(httpResponse.status_code).json(httpResponse.body)
    } else {
      return response.status(httpResponse.status_code).json({
        error: httpResponse.body.error,
      })
    }
  }
}

export { routeAdapter };
