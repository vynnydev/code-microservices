import { Express } from 'express';

import signUpRouter from './SignUpRouter'
import loginRouter from './LoginRouter'

export default (app: Express): void => {
  app.use(`/api/v1/accounts`, signUpRouter.router);
  app.use(`/api/v1/accounts`, loginRouter.router);
};