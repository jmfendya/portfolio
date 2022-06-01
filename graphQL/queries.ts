// GET HOME SLIDER COLLECTION
export const GET_HOME_SLIDER_COLLECTION = `#graphql
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
