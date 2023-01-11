import { IController } from '@presentation/protocols/IController'

import { ApolloServerErrors } from './errors/ApolloServerErrors' 

export const adaptResolver = async (controller: IController, args?: any, context?: any): Promise<any> => {
  const request = {
    ...(args || {}),
    accountId: context?.req?.accountId
  }
  const httpResponse = await controller.handle(request)
  const apolloServerErrors = new ApolloServerErrors(httpResponse.status_code, httpResponse.body.message)

  return apolloServerErrors
}