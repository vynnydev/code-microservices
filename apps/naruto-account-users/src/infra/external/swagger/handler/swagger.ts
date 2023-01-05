import { serve, setup } from 'swagger-ui-express'
import swaggerConfig from '@infra/external/swagger/docs'
import { Express } from 'express'

export default (app: Express): void => {
  app.use('/api-docs', serve, setup(swaggerConfig))
}