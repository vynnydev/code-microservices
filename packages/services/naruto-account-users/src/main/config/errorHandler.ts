import { Express, Request, Response, NextFunction } from 'express'
import { EErrorType } from '@utils/errors/EErrorType'

const sendDevResponse = (err: any, request: Request, response: Response): Response => {
  if (err.type === EErrorType.APP_ERROR)
    return response
      .status(err.status_code)
      .json({ status: 'fail', message: err.message, stack: err.stack })

  if (err.type === EErrorType.INTEGRATION_ERROR)
    return response.status(err.status_code).json({
      status: 'fail',
      message: err.message,
      integration_message: err.integration_message,
      stack: err.stack,
    })

  return response
    .status(500)
    .json({ status: 'error', message: err.message, stack: err.stack, error: err })
}

const sendProdResponse = (err: any, request: Request, response: Response): Response => {
  if (err.type === EErrorType.APP_ERROR)
    return response.status(err.status_code).json({ status: 'fail', message: err.message })

  if (err.type === EErrorType.INTEGRATION_ERROR)
    return response.status(err.status_code).json({
      status: 'fail',
      message: err.message,
      integration_message: err.integration_message,
      stack: err.stack,
    })

  return response.status(500).json({ status: 'error', message: 'Internal Server Error' })
}

export default (app: Express): void => {
  app.use((err: Error, request: Request, response: Response, next: NextFunction): Response => {
    const nodeEnv = process.env.NODE_ENV?.trim()

    if (nodeEnv === 'prod') {
      return sendProdResponse(err, request, response)
    }

    return sendDevResponse(err, request, response)
  })
}
