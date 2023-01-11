import ElasticApmNode from 'elastic-apm-node'
import { Request, Response, NextFunction } from 'express'

function setCustomAccountApmMiddleware(request: Request, response: Response, next: NextFunction): void {
  ElasticApmNode.setUserContext({
    id: request.id
  })

  next()
}

export { setCustomAccountApmMiddleware }
