import { gql } from "@apollo/client"

export const PRODUCTS = gql`
query productContentSelector{
  atSite{
    data{
      attributes{
        meta{
          contentSelector{
            data{
              attributes{
                products{
                  data{ id attributes{
                      name
          description
          sku
          mainImage{url}
          detailImages{url}
                    mainProperties{
                      id
                      propName
                      propValue
                      propRanking
                      standardized{data{attributes{name}}}
                    }
                  }}
                }
              }
            }
          }
        }
      }
    }
  }
}`