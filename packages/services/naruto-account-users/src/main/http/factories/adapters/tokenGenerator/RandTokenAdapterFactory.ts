import ITokenGenerator from '@data/protocols/utils/tokenGenerator/ITokenGenerator'

import RandTokenAdapter from '@infra/adapters/tokenGenerator/RandTokenAdapter'

export const makeRandTokenAdapter = (): ITokenGenerator => {
  const randTokenAdapter = new RandTokenAdapter()

  return randTokenAdapter
}
