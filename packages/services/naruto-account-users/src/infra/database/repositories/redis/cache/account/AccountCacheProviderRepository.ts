import Account from '@domain/models/account/Account'
import IAccountCacheProviderRepository from '@domain/repositories/redis/account/IAccountCacheProviderRepository';
import ICacheProvider from '@infra/external/redis/providers/domain/implementations/ICacheProvider';

import { 
  EXPIRATION_TIME,
  PREFIX_ACCOUNT_CACHE,
  UPDATED_ACCOUNT_CACHE_PREFIX,
  DEACTIVATED_ACCOUNT_CACHE_PREFIX,
  BLACKLIST_ACCOUNT_CACHE_PREFIX
} from '@main/config/environment'

export default class CacheAccountProviderRepository implements IAccountCacheProviderRepository {
  constructor(private readonly cacheProvider: ICacheProvider) {}
  
  async auth(account: Account): Promise<void> {
    await this.cacheProvider.save({ key: `${PREFIX_ACCOUNT_CACHE}${account.alias_id}`, value: account })
  }

  async findAccount(alias_id: string): Promise<Account | null> {
    const cacheRecovered = await this.cacheProvider.recovery<Account>(`${PREFIX_ACCOUNT_CACHE}${alias_id}`)

    return cacheRecovered
  }

  async updateAccount(account: Account): Promise<void> {
    await Promise.all([
      await this.cacheProvider.save({ key: `${UPDATED_ACCOUNT_CACHE_PREFIX}${account.alias_id}`, value: account }),
      await this.cacheProvider.invalidate(`${UPDATED_ACCOUNT_CACHE_PREFIX}${account.alias_id}`)
    ])
  }

  async deactivateAccount(account: Account): Promise<void> {
    await Promise.all([
      await this.cacheProvider.save({ key: `${DEACTIVATED_ACCOUNT_CACHE_PREFIX}${account.alias_id}`, value: account }),
      await this.cacheProvider.invalidate(`${DEACTIVATED_ACCOUNT_CACHE_PREFIX}${account.alias_id}`)
    ])
  }

  async logout(token: string): Promise<void> {
    await Promise.all([
      await this.cacheProvider.setCache({ key: `${BLACKLIST_ACCOUNT_CACHE_PREFIX}${token}`, seconds: EXPIRATION_TIME }),
      await this.cacheProvider.invalidate(`${BLACKLIST_ACCOUNT_CACHE_PREFIX}${token}`)
    ])
  }
}