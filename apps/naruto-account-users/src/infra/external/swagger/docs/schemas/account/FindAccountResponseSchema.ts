export const findAccountResponseSchema = {
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
  required: [
    'id', 
    'alias_id', 
    'email', 
    'avatar_url', 
    'cpf', 
    'phone_number',
    'password',
    'is_active',
    'created_at',
    'updated_at',
  ]
}