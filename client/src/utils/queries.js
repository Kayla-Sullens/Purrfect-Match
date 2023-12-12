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

export const QUERY_CATS = gql`
query cats {
  cats {
    userId
    catSpecies
    catName
    catBio
    catAge
    _id
  }
}
`;

export const QUERY_COMMENT = gql`
  query comment($_id: ID!) {
    comment(_id: $_id) {
      _id
      comInfo
      userId
      catId
    }
  }
`;