import { IMiddleware } from '@presentation/protocols/IMiddleware'
import { EnsureAuthenticatedMiddleware } from '@main/http/middlewares/EnsureAuthenticatedMiddleware'

export const makeEnsureAuthenticatedMiddleware = (): IMiddleware => {
  const ensureAuthenticatedMiddleware = new EnsureAuthenticatedMiddleware()

  return ensureAuthenticatedMiddleware
}