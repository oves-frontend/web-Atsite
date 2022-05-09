import { gql } from "@apollo/client"

export const QUICKLINKS = gql`
query Quicklinks{
  ovesSite {
    data {
      attributes {
        footer {
          quickLinks
        }
      }
    }
  }
}`