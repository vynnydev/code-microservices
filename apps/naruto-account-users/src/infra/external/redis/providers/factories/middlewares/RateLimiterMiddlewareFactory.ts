import { IMiddleware } from '@presentation/protocols/IMiddleware';
import RateLimiterMiddleware from '@infra/external/redis/providers/middlewares/RateLimiterMiddleware'

export const makeRateLimiterMiddleware = (): IMiddleware => {
  const rateLimiterMiddleware = new RateLimiterMiddleware()

  return rateLimiterMiddleware
}