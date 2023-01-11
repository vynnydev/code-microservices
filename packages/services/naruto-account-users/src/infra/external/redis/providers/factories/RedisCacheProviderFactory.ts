import ICacheProvider from '@infra/external/redis/providers/domain/implementations/ICacheProvider'
import RedisCacheProvider from '@infra/external/redis/providers/implementations/RedisCacheProvider'

export const makeRedisCacheProvider = (): ICacheProvider => {
  const redisCacheProvider = new RedisCacheProvider()

  return redisCacheProvider
}