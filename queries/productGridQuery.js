import { gql } from "@apollo/client"


export const PRODUCT = gql`
query product($id:ID!){
  product(id:$id){data{attributes{
      name
      description
      sku
      mainImage{url}
      detailImages{url}
      mainProperties{ propName propValue}
      productBOM{quantity item{data{attributes{
        name 
        description 
        mainProperties{propName propValue standardized{data{attributes{name}}}
      }}}}}
    }}
  }
}
`;