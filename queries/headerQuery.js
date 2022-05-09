import { gql } from "@apollo/client"

export const HEADER = gql`
query Header{
  atSite {
     data {
       attributes {
         header{searchBar navItems headerLogo{url}} 
      }
    }
  }
}`