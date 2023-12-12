import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
    }
  }
`;

export const QUERY_CATS = gql`
  {
    cats {
      _id
      catName
      catImage
      catAge
      catSpecies
    }
  }
`;

export const QUERY_CAT = gql`
  query cat($_id: ID!) {
    cat(_id: $_id) {
      _id
      catName
      catImage
      catAge
      catSpecies
      catBio
      userId
    }
  }
`;
