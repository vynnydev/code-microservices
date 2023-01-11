import { Express } from 'express'

import signUpRouter from './account/SignUpRouter'
import loginRouter from './account/LoginRouter'
import findAccountRouter from './account/FindRouter'
import updateAccountRouter from './account/UpdateRouter'
import deactivateAccountRouter from './account/DeactivateRouter'

export default (app: Express): void => {
  app.use(`/api/v1/accounts_service`, signUpRouter.router)
  app.use(`/api/v1/accounts_service`, loginRouter.router)
  app.use(`/api/v1/accounts_service`, findAccountRouter.router)
  app.use(`/api/v1/accounts_service`, updateAccountRouter.router)
  app.use(`/api/v1/accounts_service`, deactivateAccountRouter.router)
}