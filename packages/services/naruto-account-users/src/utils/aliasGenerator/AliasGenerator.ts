import IAliasGenerator from '@data/protocols/utils/aliasGenerator/IAliasGenerator'
import ITokenGenerator from '@data/protocols/utils/tokenGenerator/ITokenGenerator'

export default class AliasGenerator implements IAliasGenerator {
  constructor(private readonly tokenGenerator: ITokenGenerator) {}

  public generate(prefix: string): string {
    const generatedToken = this.tokenGenerator.generate()
    const generatedAlias = `${prefix}-${generatedToken}`

    return generatedAlias
  }
}
