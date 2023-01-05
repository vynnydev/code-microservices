import { config } from 'dotenv-flow'
import express, { Express } from 'express'

import setupErrorHandler from '@main/config/errorHandler';
import setupSwagger from '@infra/external/swagger/handler/swagger'
import setupMiddlewares from '@main/config/middlewares';
import setupRoutes from '@main/http/routes' // eslint-disable-line
import { setupApolloServer } from '@infra/external/graphql/apollo/apollo-server'

export const setupApp = async (): Promise<Express> => {
  config({ silent: true })

  const app = express()
  
  setupSwagger(app)
  setupMiddlewares(app)
  setupErrorHandler(app)
  setupRoutes(app)
  
  const server = setupApolloServer()
  await server.start()

  server.applyMiddleware({ app })
  return app
}

