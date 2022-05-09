import { gql } from "@apollo/client"

export const SOCIAL = gql`
query Footer{
  ovesSite {
    data {
      attributes {
        footer { 
          social{
            facebook
            twitter
            instagram
            linkedin
          }
        
          
        }
      }
    }
  }
  
}`