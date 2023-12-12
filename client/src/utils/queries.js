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
      catBio
    }
  }
`;

export const QUERY_CAT = gql`
  query cat($_id: ID!) {
    cat(_id: $_id) {
      _id
      catName
      catAge
      catSpecies
      catBio
      userId
    }
  }
`;
