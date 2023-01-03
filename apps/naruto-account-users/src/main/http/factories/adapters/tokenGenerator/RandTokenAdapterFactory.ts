import ITokenGenerator from '@data/protocols/utils/tokenGenerator/ITokenGenerator';

import RandTokenAdapter from '@infra/adapters/tokenGenerator/RandTokenAdapter';

const makeRandTokenAdapter = (): ITokenGenerator => {
  const randTokenAdapter = new RandTokenAdapter();

  return randTokenAdapter;
};

export default { makeRandTokenAdapter };
