import { gql } from "@apollo/client"


export const HOMEPAGE = gql`
query homepage{
  atSite{
    data {
     attributes{
      home {
        bannerHero {
          title
          subtitle
          btnLink
          btnLabel
          richTexts
          text
          bgImageURL
                 }
        bannerTextPic{
          title
          btnLink
          btnLabel
          subtitle
          richTexts
          backgroundColor
          ImageURL
                   }
        bannerPicText {
           title
          btnLink
          btnLabel
          subtitle
          richTexts
          backgroundColor
          imageURL
                    }
      }
    }
   }
  }
}`
