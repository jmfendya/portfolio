import ProjectCard from "components/project/card"
import styles from "./grid-list.module.css"
import type { ProjectCardType } from "types/project"

type GridListProps = {
  projects: ProjectCardType[]
}

const GridList = ({ projects }: GridListProps) => {
  return (
    <div className={styles["grid-4"]}>
      {/* {Array.from({ length: 6 }).map((_, i) => (
        <div className="flex flex-col" key={i}>
          <ProjectCard project={i} />
        </div>
      ))} */}
      {projects.map((project, i) => (
        <div className="flex flex-col" key={project.sys.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}

export default GridList
