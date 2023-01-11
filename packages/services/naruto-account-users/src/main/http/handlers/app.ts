import { config } from 'dotenv-flow'
import express, { Express } from 'express'

import setupErrorHandler from '@main/config/errorHandler';
import setupSwagger from '@infra/external/swagger/handler/swagger'
import setupMiddlewares from '@main/config/middlewares';
import setupRoutes from '@main/http/routes' // eslint-disable-line

import { makeApmServiceProvider } from '@infra/external/observability&metrics/elasticsearch/providers/factories/ApmServiceProviderFactory'

export const setupApp = async (): Promise<Express> => {
  config({ silent: true })

  makeApmServiceProvider().startElasticService()

  const app = express()
  
  setupSwagger(app)
  setupMiddlewares(app)
  setupErrorHandler(app)
  setupRoutes(app)
  
  return app
}

