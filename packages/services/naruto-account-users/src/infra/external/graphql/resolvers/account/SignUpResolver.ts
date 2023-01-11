import { adaptResolver } from '@infra/external/graphql/adapters/ApolloServerResolverAdapter'

import { makeSignUpController } from '@main/http/factories/controllers/account/signup/SignUpControllerFactory'

export default {
  Mutation: {
    signUp: async (parent: any, args: any) => adaptResolver(makeSignUpController())
  },
}