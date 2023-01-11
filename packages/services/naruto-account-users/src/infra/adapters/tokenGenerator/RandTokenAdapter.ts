import randToken from 'rand-token';

import ITokenGenerator from '@data/protocols/utils/tokenGenerator/ITokenGenerator';

export default class RandTokenAdapter implements ITokenGenerator {
  public generate(): string {
    const size = 28;
    const allowedCharacters = 'abcdefghijklnmopqrstuvwxyz1234567890';

    const generatedToken = randToken.generate(size, allowedCharacters);

    return generatedToken;
  }
}
