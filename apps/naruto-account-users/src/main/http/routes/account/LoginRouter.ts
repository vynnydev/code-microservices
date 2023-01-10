import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'

import { rateLimiterMiddleware } from '@infra/external/redis/providers/middlewares/RateLimiterMiddleware'
import { setCustomAccountApmMiddleware } from '@infra/external/observability&metrics/elasticsearch/providers/middlewares/SetCustomAccountApmMiddleware'

import { makeLoginController } from '@main/http/factories/controllers/account/login/LoginControllerFactory'

const router = Router();

router
  .route('/accounts/login')
  .post(
    rateLimiterMiddleware,
    setCustomAccountApmMiddleware,
    adaptRouter(makeLoginController()))

export default { router }