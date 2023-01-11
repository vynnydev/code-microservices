import { GraphQLError } from 'graphql'

export class ApolloServerErrors {
  status_code: number 
  message: any

  constructor(status_code: number, message: any) {
    this.status_code = status_code
    this.message = message
  }

  public async apolloServerErrors(): Promise<any> {
    switch (this.status_code) {
      case 200:
      case 204: return this.message
      case 400: throw new GraphQLError(this.message, {
        extensions: {
          code: 'FORBIDDEN'
        },
      })
      case 401: throw new GraphQLError(this.message, {
        extensions: {
          code: 'AuthenticationError'
        }
      })
      case 403: throw new GraphQLError(this.message, {
        extensions: {
          code: 'ForbiddenError'
        },
      }) 
      default: throw new GraphQLError(this.message, {
        extensions: {
          code: 'ApolloError'
        },
      })
    }
  }
}