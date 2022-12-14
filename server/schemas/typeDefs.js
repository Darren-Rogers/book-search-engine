const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  },
  type User{
  _id: ID
  username: String
  email: String
  password:String
  }
  type Auth{
  token:String
  User
  }

  type Query{
  getSingleUser(id:ID!): User
  }

  type Mutation{
  createUser(username:String!, email:String!, password:String!):User
  login(username:String!,email:String!,password:String!):User
  saveBook(id:ID!, bookId:ID!):User
  deleteBook(id:ID!, bookId:ID!):User

  }
`;

module.exports = typeDefs;