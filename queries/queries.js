import { gql } from "@apollo/client"


export const META = gql`
query atSiteMeta{
  atSite{
    data {
     attributes{meta{id title name description keywords favicon{url} 
       contentSelector{data{attributes{name description createdAt 
         articles{data{id attributes { title description slug content titleImage{url}}}}
         products{data {id attributes {name sku description mainImage{url} detailImages{url} mainProperties{propName propValue}}}}
         }}} }}
   }
   }
}`

export const ATSITE = gql`
query Global{
  atSite{
    data{attributes{
    header{id searchBar navItems headerLogo{url}}
    home{
     id
     bannerHero{id title subtitle btnLink btnLabel richTexts bgImageURL}
     bannerTextPic{id title subtitle btnLink btnLabel richTexts ImageURL backgroundColor}
     bannerPicText{id title subtitle btnLink btnLabel richTexts imageURL backgroundColor}
   }
   footer{
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
    social{ facebook twitter instagram linkedin }
    footerLogo{ url }}
  }}
     
   }
}`

//home query
export const HOME = gql`
query homePage{
  atSite{
    data{attributes{
      home{
        id
        bannerHero{id title subtitle btnLink btnLabel richTexts bgImageURL}
        bannerTextPic{id title subtitle btnLink btnLabel richTexts ImageURL backgroundColor}
        bannerPicText{id title subtitle btnLink btnLabel richTexts imageURL backgroundColor}
      }
    }}
  }
}
`

//single article query
export const ARTICLE = gql`
query ArticleData($id:ID!){
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
  }}
}  
ovesSite{
  data{attributes{ 
    
    header{
        searchBar
        navItems
        headerLogo {
              url 
          altText
          caption  
                  }    
           } footer {
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
        
      }}}
}
  }
`;

export const PRODUCT = gql`
query ProductData($id:ID!){
  product(id:$id){
    data{attributes{
      name
      description
      sku
      mainImage{url}
      detailImages{url}
      mainProperties{
        propName
        propValue}
    }}
  }
  ovesSite{
      data{attributes{ header{
            searchBar
            navItems
            headerLogo {
                  url 
              altText
              caption  
                      }    
               } footer {
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
            
          }}}
    }
}
`;