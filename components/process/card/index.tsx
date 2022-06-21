import { Process } from "types"
import styles from "./card.module.css"

type ProcessCardProps = {
  item: Process
}

const ProcessCard = ({ item }: ProcessCardProps) => {
  return (
    <>
      <article className="grid md:grid-cols-3 gap-8">
        {/* DESCRIPTION */}
        <div className={styles.subject}>
          <h2>{item.subject}</h2>
        </div>
        <div className={`md:col-span-2 ${styles.content}`}>
          <p>{item.content}</p>
        </div>
      </article>

      <hr />
    </>
  )
}

export default ProcessCard
