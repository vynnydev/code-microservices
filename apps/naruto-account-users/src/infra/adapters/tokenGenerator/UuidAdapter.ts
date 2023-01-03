import { v4 as uuidv4 } from 'uuid';

import ITokenGenerator from '@data/protocols/utils/tokenGenerator/ITokenGenerator';

export default class UuidAdapter implements ITokenGenerator {
  public generate(): string {
    const generatedToken = uuidv4();

    return generatedToken;
  }
}
