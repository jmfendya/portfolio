// GET PROJECT
export const GET_PROJECT = `#graphql
  query getProject($slug: String!) {
    projectCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        slug
        category
        employer
        client
        heroImage {
          sys {
            id
          }
          title
          description
          fileName
          url
          width
          height
        }
        body {
          json
          links {
            entries {
              inline {
                sys {
                  id
                }
              }
              hyperlink {
                sys {
                  id
                }
              }
              block {
                sys {
                  id
                }
              }
            }
            assets {
              hyperlink {
                sys {
                  id
                }
              }
              block {
                sys {
                  id
                }
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
      }
    }
  }
`

// GET PROJECT SLUGS
export const GET_PROJECT_SLUGS = `#graphql
  query {
    projectCollection {
      items {
        slug
      }
    }
  }
`

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
