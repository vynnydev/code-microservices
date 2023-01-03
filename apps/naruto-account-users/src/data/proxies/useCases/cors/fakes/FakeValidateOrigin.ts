import IValidateOrigin from '@domain/proxies/useCases/cors/IValidateOrigin';

export default class FakeValidateOrigin implements IValidateOrigin {
  public isValid(domain: string): boolean {
    return true;
  }
}
