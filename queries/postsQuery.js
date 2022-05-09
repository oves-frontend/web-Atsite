import { gql } from "@apollo/client"

export const POSTS = gql`
query postContentSelector{
  atSite{
    data{
      attributes{
        meta{
          contentSelector{
            data{
              attributes{

                articles{data{id attributes{
                 title 
                 description 
                 slug 
                 content 
                  titleImage{url} 
                  author{data{attributes{name}}}
                }}}
              }
            }
          }
        }
      }
    }
  }
}`

