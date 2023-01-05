export const accountSchema = {
  type: 'object',
  properties: {
    name: {
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
      type: 'string'
    },
    updated_at: {
      type: 'string'
    }
  },
  xml: {
    name: 'Account'
  }
}