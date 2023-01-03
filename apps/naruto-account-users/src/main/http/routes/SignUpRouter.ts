import { Router } from 'express';

import { routeAdapter } from '@main/http/adapters/ExpressRouteAdapter'

import signUpControllerFactory from '@main/http/factories/controllers/SignUpControllerFactory'

const router = Router();

router
  .route('/signup')
  .post(routeAdapter(signUpControllerFactory.makeSignUpController()))

export default { router }