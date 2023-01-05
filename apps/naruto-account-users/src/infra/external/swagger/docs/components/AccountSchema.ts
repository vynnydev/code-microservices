export const accountSchema = {
  Accounts: {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      alias_id: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
      avatar_url: {
        type: 'string'
      },
      cpf: {
        type: 'string'
      },
      phone_number: {
        type: 'string'
      },
      password: {
        type: 'string'
      },
      is_active: {
        type: 'boolean'
      },
      created_at: {
        type: 'Date'
      },
      updated_at: {
        type: 'Date'
      }
    }
  }
}