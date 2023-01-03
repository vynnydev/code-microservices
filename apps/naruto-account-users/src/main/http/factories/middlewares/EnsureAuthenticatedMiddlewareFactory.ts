import { IMiddleware } from '@presentation/protocols/IMiddleware'
import { EnsureAuthenticatedMiddleware } from '@main/http/middlewares/EnsureAuthenticatedMiddleware'

const makeEnsureAuthenticatedMiddleware = (): IMiddleware => {
  const ensureAuthenticatedMiddleware = new EnsureAuthenticatedMiddleware()

  return ensureAuthenticatedMiddleware
}

export { makeEnsureAuthenticatedMiddleware }