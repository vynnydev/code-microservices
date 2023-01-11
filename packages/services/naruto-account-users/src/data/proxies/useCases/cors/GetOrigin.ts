import IGetOrigin from '@domain/proxies/useCases/cors/IGetOrigin';

export default class GetOrigin implements IGetOrigin {
  public get(domain: string): string {
    const defaultDomain = 'https://localhost:3000';

    const allowedDomains = ['https://localhost:3000', 'http://localhost:3000'];

    if (allowedDomains.includes(domain)) return domain;

    return defaultDomain;
  }
}
