import { gql } from "@apollo/client";

export const getSingleUser = gql`
  query getSingleUser{
    getSingleUser{
      _id
    }
  }
`