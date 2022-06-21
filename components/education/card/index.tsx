import Image from "next/image"
import { Degree } from "types"
import styles from "./card.module.css"

type EducationCardProps = {
  type: Degree
}

const EducationCard = ({ type }: EducationCardProps) => {
  return (
    <>
      <article className="grid gap-0 lg:grid-cols-3 gap-8 justify-items-center">
        {/* LOGO */}
        <div className={`${styles.image} self-center`}>
          <Image
            key={type.logo.sys.id}
            src={type.logo.url}
            width={type.logo.width}
            height={type.logo.height}
            alt={type.logo.title}
            layout="raw"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="description lg:col-span-2 self-center">
          <h2 className={styles.degree}>{type.degree}</h2>

          <p>{type.context}</p>
        </div>
      </article>

      <hr />
    </>
  )
}

export default EducationCard
