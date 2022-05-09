import { gql } from "@apollo/client"

export const ABOUT = gql`
query About{
  ovesSite{
    data{
      attributes{
        about{
          id
           hero{
            id text title subtitle btnLink btnLabel richTexts bgImageURL
          }
          team{
             id text title subtitle btnLink btnLabel richTexts ImageURL
          }
          mission{
            id title description
          }
        }
      }
    }
  }
}`