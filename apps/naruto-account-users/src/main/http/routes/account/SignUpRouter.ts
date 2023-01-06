import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'
import { adaptMiddleware } from '@main/http/adapters/ExpressMiddlewareAdapter'

import { makeRateLimiterMiddleware } from '@infra/external/redis/providers/factories/middlewares/RateLimiterMiddlewareFactory'

import { makeSignUpController } from '@main/http/factories/controllers/account/signup/SignUpControllerFactory'

const router = Router();

router
  .route('/accounts/signup')
  .post(
    adaptMiddleware(makeRateLimiterMiddleware()),
    adaptRouter(makeSignUpController()))

export default { router }