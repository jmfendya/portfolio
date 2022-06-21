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

export type Degree = {
  sys: {
    id: string
  }
  degree: string
  context: string
  logo: any
}

export type Position = {
  sys: {
    id: string
  }
  title: string
  employer: string
  description: any
}

export type Process = {
  sys: {
    id: string
  }
  subject: string
  content: string
}

export type Theory = {
  sys: {
    id: string
  }
  title: string
  content: string
  symbol: any
}
