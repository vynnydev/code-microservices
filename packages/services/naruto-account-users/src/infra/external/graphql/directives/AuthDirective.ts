import { makeEnsureAuthenticatedMiddleware } from '@main/http/factories/middlewares/EnsureAuthenticatedMiddlewareFactory'

import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils'

import { ApolloServerErrors } from '../adapters/errors/ApolloServerErrors' 

import { GraphQLSchema } from 'graphql'

export const authDirectiveTransformer = (schema: GraphQLSchema): GraphQLSchema => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authDirective = getDirective(schema, fieldConfig, 'auth')
      if (authDirective) {
        const { resolve } = fieldConfig
        fieldConfig.resolve = async (parent, args, context, info) => {
          const request = {
            access_token: context?.req?.headers?.['x-access-token']
          }
          const httpResponse = await makeEnsureAuthenticatedMiddleware().handle(request)
          if (httpResponse.status_code === 200) {
            Object.assign(context?.req, httpResponse.body)
            return resolve.call(this, parent, args, context, info)
          } else {
            return new ApolloServerErrors(httpResponse.status_code, httpResponse.body.message)
          }
        }
      }
      return fieldConfig
    }
  })
}