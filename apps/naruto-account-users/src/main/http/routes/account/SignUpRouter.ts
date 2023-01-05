import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'

import { makeSignUpController } from '@main/http/factories/controllers/account/signup/SignUpControllerFactory'

const router = Router();

router
  .route('/accounts/signup')
  .post(adaptRouter(makeSignUpController()))

export default { router }