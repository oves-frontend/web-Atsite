import { gql } from "@apollo/client"

export const FOOTER = gql`
query Footer{
  atSite {
    data {
      attributes {
        footer {
          company
          copyrights
          contacts
          summary
          address
          email
          phone
          quickLinks
          services
          about
          social{
            facebook
            twitter
            instagram
            linkedin
          }
          footerLogo{
            url
          }
          
        }
      }
    }
  }

}`