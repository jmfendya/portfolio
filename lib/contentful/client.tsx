import { createClient } from "contentful"

const { SPACE_ID, CDA_TOKEN } = process.env

export const client = createClient({
  space: SPACE_ID as string,
  accessToken: CDA_TOKEN as string,
})
