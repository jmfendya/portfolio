// GET HOME PAGE
export const GET_HOME_PAGE = `#graphql
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
    projectCollection {
      items {
        sys {
          id
        }
        title
        slug
        category
        employer
        client
        excerpt
        thumbnail {
          title
          description
          fileName
          url
          width
          height
        }
      }
    }
  }
`
