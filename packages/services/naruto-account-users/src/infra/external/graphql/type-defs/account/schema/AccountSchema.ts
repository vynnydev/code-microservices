import { gql } from 'graphql-tag'

export default gql`
  type Account {
    id: string,
    alias_id: string,
    name: string, 
    avatar_url: String, 
    email: string, 
    cpf: string, 
    phone_number: string, 
    password: string,
    created_at: Date,
    updated_at: Date,
  }
`