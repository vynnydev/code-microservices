import logger from '@infra/external/logger/pino/logger'

const serverHandler = async () => {
  const { setupApp } = await import('./app')
  const app = await setupApp()
  
  app.listen(process.env.PORT, () => {
    logger.info(`Server running on http://localhost:${process.env.PORT}`)
  })
}

serverHandler()