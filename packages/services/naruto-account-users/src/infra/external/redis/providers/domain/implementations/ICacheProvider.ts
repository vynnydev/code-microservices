import ISaveCacheProviderDTO from '@infra/external/redis/providers/dtos/ISaveCacheProviderDTO'
import ISetCacheProviderDTO from '@infra/external/redis/providers/dtos/ISetCacheProviderDTO'
 
export default interface ICacheProvider {
  save(data: ISaveCacheProviderDTO): Promise<void>
  setCache(data: ISetCacheProviderDTO): Promise<void>
  recovery<T>(key: string): Promise<T | null>
  invalidate(key: string): Promise<void>
  invalidatePrefix(prefix: string): Promise<void>  
}