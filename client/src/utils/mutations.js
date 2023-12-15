import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADOPT_CAT = gql`
mutation AdoptCat($userId: ID, $catId: ID) {
  adoptCat(userId: $userId, catId: $catId) {
    catId
    userId
  }
}
`;

export const UPDATE_CATNAME = gql`
  mutation Mutation($updateCatName: String, $updateCatId: ID) {
    updateCat(updateCatName: $updateCatName, id: $updateCatId) {
      userId
      catSpecies
      catName
      catBio
      catAge
      _id
    }
  }
`;

export const DELETE_CAT = gql`
  mutation Mutation($id: ID) {
    deleteCat(_id: $id) {
      _id
      catName
      catAge
      catSpecies
      catBio
      userId
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation Mutation($comInfo: String, $catId: ID) {
    addComment(comInfo: $comInfo, catId: $catId) {
      _id
      comInfo
      catId
    }
  }
`;