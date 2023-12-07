const gql = String.raw;

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Cat {
    _id: ID
    catName: String
    catAge: Int
    catBreed: String
    catBio: String
  }

  type Comment {
    _id: ID
    comInfo: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
