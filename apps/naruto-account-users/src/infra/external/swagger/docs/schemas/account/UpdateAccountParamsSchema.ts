export const updateAccountParamsSchema = {
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
  },
  required: [
    'id', 
    'alias_id', 
    'email',
    'cpf', 
    'phone_number',
    'password',
  ]
}