import { gql } from 'apollo-server-express'

export default gql`
  extend type Mutation {
    findAccount (account_alias_id: String!): Account! @auth
  }

  type Account {
    id: ID!,
    alias_id: String!,
    name: String!, 
    avatar_url: String, 
    email: string!, 
    cpf: String!, 
    phone_number: String!, 
    password: String!,
    created_at: DateTime!,
    updated_at: DateTime!,
  }
`