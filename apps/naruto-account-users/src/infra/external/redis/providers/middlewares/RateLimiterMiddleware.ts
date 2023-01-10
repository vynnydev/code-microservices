import { Request, Response, NextFunction } from 'express';
import { createClient } from 'redis';
import { RateLimiterRedis } from 'rate-limiter-flexible';

import AppError from '@utils/errors/AppError';
import {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASS
} from '@main/config/environment'

const redisClient = createClient({
  socket: {
    host: REDIS_HOST,
    port: Number(REDIS_PORT ?? 6379),
  },
  password: REDIS_PASS || undefined
})

/**
 * Quem estiver consumindo esta API tem direto de fazer 4 requests em 1 segundo,
 * se for mais de 4 requests em 1 segundo a API vai bloquear.
 */
const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimiter', // chave única, que contem essas opções.
  points: 4, // 4 pontos
  duration: 1 // por 1 segundo.
});

export async function rateLimiterMiddleware(
  request: Request,
  response: Response,
  next: NextFunction 
): Promise<void> {
  try {
    // salvando o ip do consumidor da minha API.
    await limiter.consume(request.ip);

    return next()
  } catch(error) {
    throw new AppError({ message: 'Too many request', status_code: 429 })
  }
}
