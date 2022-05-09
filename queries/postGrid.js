import { gql } from "@apollo/client"
export const POST = gql`
query post($id:ID!){
article(id:$id){
  data{
    id
    attributes{
      titleImage{url}
      title
      description
      content
      slug
      author{data{attributes{name}}}
             }
      }
              }
  }`;