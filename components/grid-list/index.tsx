import ProjectCard from "components/project/card"
import type { ProjectCardType } from "types"

type GridListProps = {
  projects: ProjectCardType[]
}

const GridList = ({ projects }: GridListProps) => {
  return (
    <div className="grid-4">
      {/* {Array.from({ length: 6 }).map((_, i) => (
        <div className="flex flex-col" key={i}>
          <ProjectCard project={i} />
        </div>
      ))} */}
      {projects.map((project) => (
        <div className="flex flex-col" key={project.sys.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default GridList
