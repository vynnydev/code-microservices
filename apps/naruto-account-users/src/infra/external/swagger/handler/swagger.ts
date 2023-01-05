import swaggerConfig from '@infra/external/swagger/docs'
import { noCacheMiddleware } from '@main/http/middlewares/NoCacheMiddleware'
import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', noCacheMiddleware, serve, setup(swaggerConfig))
}