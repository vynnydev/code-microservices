import IValidateOrigin from '@domain/proxies/useCases/cors/IValidateOrigin';

export default class ValidateOrigin implements IValidateOrigin {
  public isValid(domain: string): boolean {
    const allowedDomains = ['https://localhost:3000', 'http://localhost:3000'];

    return allowedDomains.includes(domain);
  }
}
