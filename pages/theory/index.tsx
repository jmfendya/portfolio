import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_THEORY_PAGE } from "graphQL/queries"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Theory } from "types"
import TheoryCard from "components/theory/card"
import styles from "components/theory/card/card.module.css"

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetcher(GET_THEORY_PAGE)

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
      theories: data.theoryCollection.items,
      error,
    },
  }
}

export const TheoryPage = ({
  error,
  theories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // TODO: Handle errors

  if (!theories) return <div>Not Found</div>

  return (
    <div className="prose md:prose-lg xl:prose-xl prose-slate max-w-none">
      <h1>User Experience Design Basics</h1>

      <div className="grid sm:grid-cols-1 gap-8">
        {theories.map((theory: Theory) => (
          <div className={styles["theory-card"]} key={theory.sys.id}>
            <TheoryCard theory={theory} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TheoryPage
