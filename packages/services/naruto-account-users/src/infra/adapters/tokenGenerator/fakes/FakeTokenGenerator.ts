import ITokenGenerator from '@data/protocols/utils/tokenGenerator/ITokenGenerator';

export default class FakeTokenGenerator implements ITokenGenerator {
  public generate(): string {
    return 'any_token';
  }
}
