import IAliasGenerator from '@data/protocols/utils/aliasGenerator/IAliasGenerator'

import AliasGenerator from '@utils/aliasGenerator/AliasGenerator'

import { makeRandTokenAdapter } from '@main/http/factories/adapters/tokenGenerator/RandTokenAdapterFactory'

export const makeAliasGenerator = (): IAliasGenerator => {
  const aliasGenerator = new AliasGenerator(makeRandTokenAdapter())

  return aliasGenerator
}