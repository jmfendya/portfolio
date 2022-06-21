import Image from "next/image"
import Link from "next/link"
import { ProjectCardType } from "types"
import styles from "./card.module.css"

type ProjectCardProps = {
  project: ProjectCardType
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/projects/project/${project.slug}`}>
        <a className={styles.img}>
          <Image
            src={project.thumbnail.url}
            alt={project.title}
            width={project.thumbnail.width}
            height={project.thumbnail.height}
            layout="responsive"
          />
        </a>
      </Link>
      <div className={styles.content}>
        <Link href={`/projects/project/${project.slug}`}>
          <a>
            <h5 className={styles.title}>{project.title}</h5>
          </a>
        </Link>
        <p className={styles.excerpt}>{project.excerpt}</p>
        <Link href={`/projects/project/${project.slug}`}>
          <a className={styles.btn}>View Project</a>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
