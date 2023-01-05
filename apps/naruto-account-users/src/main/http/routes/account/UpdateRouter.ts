import { Router } from 'express';

import { adaptRouter } from '@main/http/adapters/ExpressRouteAdapter'
import { adaptMiddleware } from '@main/http/adapters/ExpressMiddlewareAdapter'

import { makeEnsureAuthenticatedMiddleware } from '@main/http/factories/middlewares/EnsureAuthenticatedMiddlewareFactory'

import { makeUpdateAccountController } from '@main/http/factories/controllers/account/update/UpdateAccountControllerFactory'

const router = Router();

router
  .route('/accounts/update/:account_alias_id')
  .post(
    adaptMiddleware(makeEnsureAuthenticatedMiddleware()),
    adaptRouter(makeUpdateAccountController()))

export default { router }