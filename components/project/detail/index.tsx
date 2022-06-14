import Image from "next/image"
import HeroSlider from "components/hero-slider"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderOptions } from "lib/contentful/renderRichText"
import { Project } from "types/project"

type ProjectDetailViewProps = {
  project: Project
}

const ProjectDetailView = ({ project }: ProjectDetailViewProps) => {
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

      <article className="prose md:prose-lg xl:prose-xl prose-slate">
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

export default ProjectDetailView
