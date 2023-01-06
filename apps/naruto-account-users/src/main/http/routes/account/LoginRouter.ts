import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'
import { adaptMiddleware } from '@main/http/adapters/ExpressMiddlewareAdapter'

import { makeRateLimiterMiddleware } from '@infra/external/redis/providers/factories/middlewares/RateLimiterMiddlewareFactory'

import { makeLoginController } from '@main/http/factories/controllers/account/login/LoginControllerFactory'

const router = Router();

router
  .route('/accounts/login')
  .post(
    adaptMiddleware(makeRateLimiterMiddleware()),
    adaptRouter(makeLoginController()))

export default { router }