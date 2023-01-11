export const findAccountParamsSchema = {
  type: 'object',
  properties: {
    account_alias_id: {
      type: 'string'
    },
  },
  required: ['account_alias_id']
}