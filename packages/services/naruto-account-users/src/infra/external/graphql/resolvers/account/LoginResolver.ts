import { adaptResolver } from '@infra/external/graphql/adapters/ApolloServerResolverAdapter'

import { makeLoginController } from '@main/http/factories/controllers/account/login/LoginControllerFactory'

export default {
  Query: {
    login: async (parent: any, args: any) => adaptResolver(makeLoginController())
  }
}