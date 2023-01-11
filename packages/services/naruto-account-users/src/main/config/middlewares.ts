import { Express, json, urlencoded } from 'express'
import cors from 'cors'
import validateOriginFactory from '@main/http/factories/proxies/cors/ValidateOriginFactory'

export default (app: Express): void => {
  const validateOrigin = validateOriginFactory.makeValidateOrigin()

  app.use(json())
  app.use(urlencoded({ extended: true }))
  app.use(
    cors({
      origin: (origin, callback) => callback(null, origin ? validateOrigin.isValid(origin) : false),
      optionsSuccessStatus: 200,
      credentials: true,
    }),
  )
}
