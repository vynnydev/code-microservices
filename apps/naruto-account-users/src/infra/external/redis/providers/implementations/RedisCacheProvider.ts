import { redisClient } from '@infra/external/redis/config/client'

import ICacheProvider from '@infra/external/redis/providers/domain/implementations/ICacheProvider'

import ISaveCacheProviderDTO from '@infra/external/redis/providers/dtos/ISaveCacheProviderDTO'
import ISetCacheProviderDTO from '@infra/external/redis/providers/dtos/ISetCacheProviderDTO'

export default class RedisCacheProvider implements ICacheProvider {
  public async save({ key, value }: ISaveCacheProviderDTO): Promise<void> {
    await redisClient.set(key, JSON.stringify(value))
  }

  public async setCache({ key, seconds }: ISetCacheProviderDTO): Promise<void> {
    await redisClient.set(key, 1, 'EX', seconds)
  }

  public async recovery<T>(key: string): Promise<T | null> {
    const data = await redisClient.get(key)

    if (!data) return null
    
    // Aqui estou transformando o JSON que foi salvo lá no redis em objeto de string's.
    const parsedData = JSON.parse(data) as T
    
    return parsedData
  }

  public async invalidate(key: string): Promise<void> {
    // remover key
    await redisClient.del(key)
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    // deletar todos as keys que foram passadas o prefix.
    // a variável "keys", vai armazenar todos as keys que foi encontrada pelo prefixo.
    const keys = await redisClient.keys(`${prefix}:*`)

    // deletando as keys.
    // iniciando um pipeline no redis.
    const pipeline = redisClient.pipeline()
    keys.forEach(key => {
      pipeline.del(key)
    })

    // precisamos executar essa pipeline, para fazer as alterações la no redis.
    await pipeline.exec()
  }
}