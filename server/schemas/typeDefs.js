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
    catImage: String
    catAge: String
    catSpecies: String
    catBio: String
    userId: ID
  }

  type Comment {
    _id: ID
    comInfo: String
    userId: ID
    catId: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    cat(_id: ID!): Cat
    cats: [Cat]
    comment(_id: ID!): Comment
    comments: [Comment]
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
    updateCat(id: ID, updateCatName: String): Cat
    deleteCat(_id: ID): Cat
    addComment(comInfo: String, userId: ID, catId: ID): Comment
    deleteComment(_id: ID): Comment
  }
`;

module.exports = typeDefs;
