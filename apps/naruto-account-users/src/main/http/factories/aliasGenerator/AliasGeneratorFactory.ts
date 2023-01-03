import IAliasGenerator from '@data/protocols/utils/aliasGenerator/IAliasGenerator';

import AliasGenerator from '@utils/aliasGenerator/AliasGenerator';

import randTokenAdapterFactory from '@main/http/factories/adapters/tokenGenerator/RandTokenAdapterFactory';

const makeAliasGenerator = (): IAliasGenerator => {
  const randTokenAdapter = randTokenAdapterFactory.makeRandTokenAdapter();

  const aliasGenerator = new AliasGenerator(randTokenAdapter);

  return aliasGenerator;
};

export default { makeAliasGenerator };
