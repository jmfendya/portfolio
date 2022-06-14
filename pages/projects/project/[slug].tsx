import {
  // GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_PROJECT_SLUGS, GET_PROJECT } from "graphQL/queries"
import ProjectDetailView from "components/project/detail"

// GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
  const { data, error } = await fetcher(GET_PROJECT_SLUGS)

  const projects = data.projectCollection.items

  const paths = projects.map((project: any) => {
    return { params: { slug: `${project.slug}` } }
  })

  // TODO: Check for errors

  return {
    paths,
    fallback: false,
  }
}

// GET STATIC PROPS
export const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string }>
) => {
  const variables = { slug: context.params?.slug }

  const { data, error } = await fetcher(GET_PROJECT, variables)

  return {
    props: {
      project: data.projectCollection.items[0],
    },
  }
}

// PROJECT DETAIL COMPONENT
const ProjectDetail = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!project) return <div>Not Found</div>

  return <ProjectDetailView project={project} />
}

export default ProjectDetail
