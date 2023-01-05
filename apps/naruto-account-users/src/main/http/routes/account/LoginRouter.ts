import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'

import { makeLoginController } from '@main/http/factories/controllers/account/login/LoginControllerFactory'

const router = Router();

router
  .route('/accounts/login')
  .post(adaptRouter(makeLoginController()))

export default { router }