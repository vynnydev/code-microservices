import { faker } from '@faker-js/faker';

import Account from '@domain/models/account/Account';
import { accountRole } from '@domain/types/account/TAccountRole'

import IMockAccountModelDTO from '@tests/domain/mocks/dtos/IMockAccountModelDTO';

const mock = (data?: IMockAccountModelDTO): Account => {
  const accountMock = {
    id: faker.datatype.uuid(),
    alias_id: `account-${faker.datatype.uuid()}`,
    name: faker.commerce.productName(),
    email: faker.internet.email(),
    phone_number: String(faker.datatype.number()),
    avatar_url: String(faker.internet.url()),
    cpf: String(faker.datatype.number()),
    password: String(faker.internet.password()),
    is_active: faker.datatype.boolean(), 
    role: accountRole[1],
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
    ...data,
  };

  return accountMock;
};

export default { mock };
