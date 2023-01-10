import Redis, { RedisOptions } from 'ioredis'

import {
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASS,
  REDIS_DB
} from '@main/config/environment'

interface IRedisOptions {
  driver: string;
  config: RedisOptions;
}

const options: IRedisOptions = {
  driver: 'redis',
  config: {
    host: REDIS_HOST,
    port: Number(REDIS_PORT ?? 6379),
    db: Number(REDIS_DB ?? 0),
  }
}

if (REDIS_PASS) {
  options.config.password = REDIS_PASS
}

export const redisClient = new Redis(options.config)