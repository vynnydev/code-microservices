import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'
import { adaptMiddleware } from '@main/http/adapters/ExpressMiddlewareAdapter'

import { makeRateLimiterMiddleware } from '@infra/external/redis/providers/factories/middlewares/RateLimiterMiddlewareFactory'
import { makeEnsureAuthenticatedMiddleware } from '@main/http/factories/middlewares/EnsureAuthenticatedMiddlewareFactory'

import { makeFindAccountController } from '@main/http/factories/controllers/account/find/FindAccountControllerFactory'

const router = Router();

router
  .route('/accounts/find/:account_alias_id')
  .post(
    adaptMiddleware(makeRateLimiterMiddleware()),
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRouter(makeFindAccountController()))

export default { router }