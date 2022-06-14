export type Project = {
  sys: { id: string }
  title: string
  slug: string
  category: string
  employer: string
  client: string
  heroImage: {
    sys: { id: string }
    title: string
    description: string
    fileName: string
    url: string
    width: number
    height: number
  }
  body: any
}

export type ProjectCardType = {
  sys: { id: string }
  title: string
  slug: string
  category: string
  employer: string
  client: string
  excerpt: string
  thumbnail: {
    title: string
    description: string
    fileName: string
    url: string
    width: number
    height: number
  }
}
