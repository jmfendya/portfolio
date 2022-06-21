import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_EXPERIENCE_PAGE } from "graphQL/queries"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Position } from "types"
import ExperienceCard from "components/experience/card"

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetcher(GET_EXPERIENCE_PAGE)

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
      experience: data.experienceCollection.items,
      error,
    },
  }
}

export const ExperiencePage = ({
  error,
  experience,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // TODO: Handle errors

  if (!experience) return <div>Not Found</div>

  return (
    <div className="prose md:prose-lg xl:prose-xl prose-slate max-w-none">
      <h1>Experience</h1>

      {experience.map((position: Position) => (
        <div key={position.sys.id}>
          <ExperienceCard position={position} />
        </div>
      ))}
    </div>
  )
}

export default ExperiencePage
