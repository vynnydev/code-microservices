import { gql } from 'graphql-tag'

export default gql`
  extend type Query {
    login (email: String!, password: String!): Account!
  }

  type Account {
    access_token: String!
  }
`