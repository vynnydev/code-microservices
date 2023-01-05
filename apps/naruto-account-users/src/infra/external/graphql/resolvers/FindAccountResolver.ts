import { adaptResolver } from '@main/http/adapters/ApolloServerResolverAdapter'

import { makeFindAccountController } from '@main/http/factories/controllers/account/find/FindAccountControllerFactory'

export default {
  Query: {
    findAccount: async (parent: any, args: any) => adaptResolver(makeFindAccountController())
  }
}