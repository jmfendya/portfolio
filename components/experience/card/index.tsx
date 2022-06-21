import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { renderOptions } from "lib/contentful/renderRichText"
import { Position } from "types"
import styles from "./card.module.css"

type ExperienceCardProps = {
  position: Position
}

const ExperienceCard = ({ position }: ExperienceCardProps) => {
  return (
    <>
      <article className="grid md:grid-cols-3 gap-8">
        {/* POSITION */}
        <div className={styles.position}>
          <h2 className="title">{position.title}</h2>
          <h3 className="employer">{position.employer}</h3>
        </div>

        {/* DESCRIPTION */}
        <div className={`${styles.description} md:col-span-2`}>
          {documentToReactComponents(
            position.description.json,
            renderOptions(position.description.links)
          )}
        </div>
      </article>

      <hr />
    </>
  )
}

export default ExperienceCard
