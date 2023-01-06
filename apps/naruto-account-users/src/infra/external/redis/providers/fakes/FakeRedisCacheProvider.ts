import ICacheProvider from '@infra/external/redis/providers/domain/implementations/ICacheProvider'
import ICacheProviderDTO from '@infra/external/redis/providers/dtos/ICacheProviderDTO'

interface ICacheData {
  [key: string]: string;
}

export default class FakeRedisCacheProvider implements ICacheProvider {
  private cache: ICacheData;

  constructor() {
    this.cache = {} as ICacheData;
  }

  public async save({ key, value }: ICacheProviderDTO): Promise<void> {
    this.cache[key] = JSON.stringify(value);
  }

  public async recovery<T>(key: string): Promise<T | null> {
    try {
      const data = JSON.parse(this.cache[key]);

      if (!data) {
        return null;
      }

      return data as T;
    } catch(err) {
      return null;
    }
  }

  public async invalidate(key: string): Promise<void> {
    delete this.cache[key];
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = Object.keys(this.cache).filter(key => {
      key.startsWith(`${prefix}:`)
    });

    keys.forEach(key => {
      delete this.cache[key]
    });
  }
}