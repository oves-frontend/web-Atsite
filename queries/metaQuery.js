import { gql } from "@apollo/client"

export const META = gql`
  query Meta{
    ovesSite{
    data{attributes{
      meta{
        id
        name
        title
        description
        keywords favicon{url}
        contentSelector{data{id}}
      }
    }}
  }
  }`
