import Account from '@domain/models/account/Account'

export default class AccountMapper {
  static toPersistence(account: Account) {
    return {
      id: account.id,
      alias_id: account.alias_id,
      name: account.name,
      avatar_url: account.avatar_url,
      cpf: account.cpf,
      email: account.email,
      password: account.password,
      phone_number: account.phone_number,
      is_active: account.is_active,
      role: account.role,
      created_at: account.created_at,
      updated_at: account.updated_at,
    };
  }
}
