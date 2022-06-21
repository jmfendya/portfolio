import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_EDUCATION_PAGE } from "graphQL/queries"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import { Degree } from "types"
import EducationCard from "components/education/card"

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await fetcher(GET_EDUCATION_PAGE)

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
      education: data.educationCollection.items,
      error,
    },
  }
}

export const EducationPage = ({
  error,
  education,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // TODO: Handle errors

  if (!education) return <div>Not Found</div>

  return (
    <div className="prose md:prose-lg xl:prose-xl prose-slate max-w-none">
      <h1>Education</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
        {education.map((type: Degree) => (
          <div className="degree" key={type.sys.id}>
            <EducationCard type={type} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationPage
