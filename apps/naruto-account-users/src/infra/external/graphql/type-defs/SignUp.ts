import { gql } from 'apollo-server-express'

export default gql`
  extend type Mutation {
    signUp (
      name: String!, 
      avatar_url: String, 
      email: string!, 
      cpf: String!, 
      phone_number: String!, 
      password: String!, 
      password_confirmation: String!
    ): Account!
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