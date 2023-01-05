export const signUpAccountParamsSchema = {
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
    passwordConfirmation: {
      type: 'string'
    }
  },
  required: [
    'name', 
    'email', 
    'cpf', 
    'phone_number', 
    'password', 
    'passwordConfirmation',
  ]
}