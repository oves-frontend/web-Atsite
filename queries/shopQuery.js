import { gql } from "@apollo/client"

export const SHOP = gql`

query products{
    ovesSite {
      data {
        attributes {
          
          product{
            id
            shopGrid
            shopGrid1{
              title
              subtitle
              btnLink
              btnLabel
              richTexts
              text
              bgImageURL
            }
          }
        }
      }
    }
  }`