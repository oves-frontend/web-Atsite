import { gql } from "@apollo/client"

export const BLOG = gql`

query blog{
  atSite {
    data {
      attributes {
        blog{
          blogHero {
            title
            subtitle
            btnLink
            btnLabel
            richTexts
            text
            bgImageURL
          }
          blogGrid
        }
      }
    }
  }
}`