import AliasGenerator from '@utils/aliasGenerator/AliasGenerator'

import FakeTokenGenerator from '@infra/adapters/tokenGenerator/fakes/FakeTokenGenerator'

let aliasGenerator: AliasGenerator
let fakeTokenGenerator: FakeTokenGenerator

describe('AliasGenerator', () => {
  beforeEach(() => {
    fakeTokenGenerator = new FakeTokenGenerator()

    aliasGenerator = new AliasGenerator(fakeTokenGenerator)
  })

  it('should be able to generate alias', () => {
    const generatedToken = aliasGenerator.generate('any_prefix')

    expect(generatedToken).toBe('any_prefix-any_token')
  })
})
