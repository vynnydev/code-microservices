import IGetOrigin from '@domain/proxies/useCases/cors/IGetOrigin';

export default class FakeGetOrigin implements IGetOrigin {
  public get(domain: string): string {
    const defaultDomain = 'any_domain';

    return defaultDomain;
  }
}
