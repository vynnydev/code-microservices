import { adaptResolver } from '@main/http/adapters/ApolloServerResolverAdapter'

import { makeUpdateAccountController } from '@main/http/factories/controllers/account/update/UpdateAccountControllerFactory'

export default {
  Mutation: {
    updateAccount: async (parent: any, args: any) => adaptResolver(makeUpdateAccountController())
  },
}