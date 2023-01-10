import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'
import { adaptMiddleware } from '@main/http/adapters/ExpressMiddlewareAdapter'

import { makeRateLimiterMiddleware } from '@infra/external/redis/providers/factories/middlewares/RateLimiterMiddlewareFactory'
import { makeEnsureAuthenticatedMiddleware } from '@main/http/factories/middlewares/EnsureAuthenticatedMiddlewareFactory'

import { makeFindAccountsController } from '@main/http/factories/controllers/account/findAll/FindAccountsControllerFactory'

const router = Router();

router
  .route('/accounts/find-all')
  .post(
    adaptMiddleware(makeRateLimiterMiddleware()),
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRouter(makeFindAccountsController()))

export default { router }