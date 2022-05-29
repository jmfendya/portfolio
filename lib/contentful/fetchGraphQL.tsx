export const fetcher = async (query: any, variables?: any) => {
  const { SPACE_ID, CDA_TOKEN } = process.env

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CDA_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
    }
  )

  const result = await res.json()
  // console.log('RESULT', result)

  // CAPTURE ERRORS
  if (result.errors) {
    return {
      data: null,
      error: result.errors[0].message,
    }
  }

  // RETURN RESULT
  return {
    data: result.data,
    error: null,
  }
}
