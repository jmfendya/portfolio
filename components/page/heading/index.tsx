import { ReactNode } from "react"
import styles from "./heading.module.css"

type PageHeadingProps = {
  children?: ReactNode
  title: string
}

const PageHeading = ({ children, title }: PageHeadingProps) => {
  return (
    <div className={styles.heading}>
      <div className={styles["heading-left"]}>
        <h2 className={styles["page-title"]}>{title}</h2>
      </div>

      {children}
    </div>
  )
}

export default PageHeading
