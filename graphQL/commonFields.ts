// IMAGE FIELDS
export const imageFields = `#graphql
sys {
  id
}
title
description
fileName
url
width
height
`

// LINKS FIELDS
export const linksFields = `#graphql
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
`
