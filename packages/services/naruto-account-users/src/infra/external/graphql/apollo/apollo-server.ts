import 'reflect-metadata'
import accountTypeDefs from '@infra/external/graphql/type-defs/account'
import accountResolvers from '@infra/external/graphql/resolvers/account'
import { authDirectiveTransformer } from '@infra/external/graphql/directives'

import AccountSchema from '@infra/external/graphql/type-defs/account/schema/AccountSchema'

import { makeExecutableSchema } from '@graphql-tools/schema'
import { ApolloServer } from '@apollo/server'
import { GraphQLError } from 'graphql'

const handleErrors = (response: any, errors: readonly GraphQLError[]): void => {
  errors?.forEach(error => {
    response.data = undefined
    if (checkError(error, 'UserInputError')) {
      response.http.status = 400
    } else if (checkError(error, 'AuthenticationError')) {
      response.http.status = 401
    } else if (checkError(error, 'ForbiddenError')) {
      response.http.status = 403
    } else {
      response.http.status = 500
    }
  })
}

const checkError = (error: GraphQLError, errorName: string): boolean => {
  return [error.name, error.originalError?.name].some(name => name === errorName)
}

let accountSchema = makeExecutableSchema({ resolvers: accountResolvers, typeDefs: accountTypeDefs })
accountSchema = authDirectiveTransformer(accountSchema)

interface IContext {
  account?: typeof AccountSchema
}

const parseOptions = { noLocation: true };
export const setupServer = new ApolloServer<IContext>({
  schema: accountSchema,
  plugins: [{
    requestDidStart: async () => ({
      willSendResponse: async ({ response, errors }) => handleErrors(response, errors)
    })
  }],
  parseOptions
})
