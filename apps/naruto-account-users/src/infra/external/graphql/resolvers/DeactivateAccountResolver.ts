import { adaptResolver } from '@main/http/adapters/ApolloServerResolverAdapter'

import { makeDeactivateAccountController } from '@main/http/factories/controllers/account/deactivate/DeactivateAccountControllerFactory'

export default {
  Mutation: {
    deactivateAccount: async (parent: any, args: any) => adaptResolver(makeDeactivateAccountController())
  },
}