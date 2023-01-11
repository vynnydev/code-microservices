import { gql } from 'graphql-tag'

export default gql`
  extend type Query {
    findAccount (account_alias_id: String!): Account! @auth
  }

  type Account {
    id: ID!,
    alias_id: String!,
    name: String!, 
    avatar_url: String, 
    email: String!, 
    cpf: String!, 
    phone_number: String!, 
    password: String!,
    created_at: DateTime!,
    updated_at: DateTime!,
  }
`