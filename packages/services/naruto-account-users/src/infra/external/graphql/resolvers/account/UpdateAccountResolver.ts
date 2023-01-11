import { adaptResolver } from '@infra/external/graphql/adapters/ApolloServerResolverAdapter'

import { makeUpdateAccountController } from '@main/http/factories/controllers/account/update/UpdateAccountControllerFactory'

export default {
  Mutation: {
    updateAccount: async (parent: any, args: any) => adaptResolver(makeUpdateAccountController())
  },
}