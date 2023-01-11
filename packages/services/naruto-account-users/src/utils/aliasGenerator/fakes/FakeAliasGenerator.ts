import IAliasGenerator from '@data/protocols/utils/aliasGenerator/IAliasGenerator'

export default class FakeAliasGenerator implements IAliasGenerator {
  public generate(prefix: string): string {
    const generatedAlias = 'any_alias_id'

    return generatedAlias
  }
}
