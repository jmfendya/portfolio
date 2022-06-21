import { imageFields } from "./commonFields"
import { linksFields } from "./commonFields"

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
          ${imageFields}
        }
        body {
          json
          ${linksFields}
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
            ${imageFields}
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
          ${imageFields}
        }
      }
    }
  }
`

// GET EXPERIENCE PAGE
export const GET_EXPERIENCE_PAGE = `#graphql
  query {
    experienceCollection(order: sys_firstPublishedAt_ASC) {
      items {
        sys {
          id
        }
        title
        employer
        description {
          json
          ${linksFields}
        }
      }
    }
  }
`

export const GET_EDUCATION_PAGE = `#graphql
  query {
    educationCollection(order: sys_firstPublishedAt_ASC) {
      items {
        sys {
          id
        }
        degree
        context
        logo {
          ${imageFields}
        }
      }
    }
  }
`

export const GET_THEORY_PAGE = `#graphql
  query {
    theoryCollection(order: sys_firstPublishedAt_ASC) {
      items {
        sys {
          id
        }
        title
        content
        symbol {
          ${imageFields}
        }
      }
    }
  }
`

export const GET_PROCESS_PAGE = `#graphql
  query {
    processCollection {
      items {
        intro
      }
    }
    processItemCollection(order: sys_firstPublishedAt_ASC) {
      items {
        sys {
          id
        }
        subject
        content
      }
    }
  }
`
