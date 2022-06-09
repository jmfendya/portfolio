import Image from "next/image"
import { ProjectCardType } from "types/project"
import styles from "./card.module.css"

type ProjectCardProps = {
  project: ProjectCardType
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <a className={styles.img} href="#">
        <Image
          src={project.thumbnail.url}
          alt={project.title}
          width={project.thumbnail.width}
          height={project.thumbnail.height}
          layout="responsive"
        />
      </a>
      <div className={styles.content}>
        <a href="#">
          <h5 className={styles.title}>{project.title}</h5>
        </a>
        <p className={styles.excerpt}>{project.excerpt}</p>
        <a href="#" className={styles.btn}>
          View Project
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
