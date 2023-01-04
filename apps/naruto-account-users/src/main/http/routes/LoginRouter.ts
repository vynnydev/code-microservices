import { Router } from 'express';

import { routeAdapter } from '@main/http/adapters/ExpressRouteAdapter'

import loginControllerFactory from '@main/http/factories/controllers/LoginControllerFactory'

const router = Router();

router
  .route('/login')
  .post(routeAdapter(loginControllerFactory.makeLoginController()))

export default { router }