import {
  // GetStaticProps,
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next"
import Image from "next/image"
import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_PROJECT_SLUGS, GET_PROJECT } from "graphQL/queries"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderOptions } from "lib/contentful/renderRichText"

import HeroSlider from "components/hero-slider"
import SkeletonHero from "components/skeleton/hero"
import Skeleton from "components/skeleton"

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
    fallback: true,
  }
}

// GET STATIC PROPS
export const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string }>
) => {
  const variables = { slug: context.params?.slug }

  const { data, error } = await fetcher(GET_PROJECT, variables)

  const project = data.projectCollection.items[0]

  if (error || !project)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }

  return {
    props: {
      project,
    },
    revalidate: 60,
  }
}

// PROJECT DETAIL COMPONENT
const ProjectDetail = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!project)
    return (
      <>
        <SkeletonHero />
        <Skeleton type="h1" />

        {Array.from({ length: 8 }, (_, i) => (
          <div key={i}>
            <Skeleton type="content" />
          </div>
        ))}
      </>
    )

  const hero = project.heroImage

  return (
    <>
      {/* SLIDER */}
      <HeroSlider>
        <Image
          key={hero.sys.id}
          src={hero.url}
          width={hero.width}
          height={hero.height}
          alt={hero.title}
          layout="raw"
          priority
        />
      </HeroSlider>

      <article className="prose md:prose-lg xl:prose-xl prose-slate max-w-none">
        {/* TITLE */}
        <h1>{project.title}</h1>

        {/* METADATA */}
        <div>
          <span>Category: </span>
          <span>{project.category}</span>
        </div>
        <div>
          <span>Employer: </span>
          <span>{project.employer}</span>
        </div>
        <div>
          <span>Client: </span>
          <span>{project.client}</span>
        </div>

        {/* BODY */}
        {documentToReactComponents(
          project.body.json,
          renderOptions(project.body.links)
        )}
      </article>
    </>
  )
}

export default ProjectDetail
