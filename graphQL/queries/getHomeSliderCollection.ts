export const getHomeSliderCollection = `#graphql
  query {
    homeSliderCollection {
      items {
        sliderImagesCollection {
          items {
            url
            width
            height
            title
            size
            fileName
            sys {
              id
            }
          }
        }
      }
    }
  }
`
