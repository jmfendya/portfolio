import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_PROCESS_PAGE } from "graphQL/queries"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Process } from "types"
import ProcessCard from "components/process/card"

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetcher(GET_PROCESS_PAGE)

  // TODO: Check for errors
  if (error) {
    return {
      props: {
        error,
        data,
      },
    }
  }

  return {
    props: {
      intro: data.processCollection.items[0].intro,
      items: data.processItemCollection.items,
      error,
    },
  }
}

export const ProcessPage = ({
  error,
  intro,
  items,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // TODO: Handle errors

  if (!intro) return <div>Not Found</div>

  return (
    <div className="prose md:prose-lg xl:prose-xl prose-slate max-w-none">
      <h1>Process</h1>

      <p>{intro}</p>

      <div>
        {items.map((item: Process) => (
          <div key={item.sys.id}>
            <ProcessCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProcessPage
