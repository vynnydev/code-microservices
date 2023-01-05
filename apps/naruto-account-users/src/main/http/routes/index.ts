import { Express } from 'express';

import signUpRouter from './account/SignUpRouter'
import loginRouter from './account/LoginRouter'
import findAccountRouter from './account/FindRouter'
import updateAccountRouter from './account/UpdateRouter'
import deactivateAccountRouter from './account/DeactivateRouter'

export default (app: Express): void => {
  app.use(`/api/v1/micro_accounts`, signUpRouter.router);
  app.use(`/api/v1/micro_accounts`, loginRouter.router);
  app.use(`/api/v1/micro_accounts`, findAccountRouter.router);
  app.use(`/api/v1/micro_accounts`, updateAccountRouter.router);
  app.use(`/api/v1/micro_accounts`, deactivateAccountRouter.router);
};