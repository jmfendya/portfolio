import styles from "./skeleton.module.css"

type SkeletonType = {
  children?: React.ReactNode
  type: string
}

const Skeleton = ({ children, type }: SkeletonType) => {
  return <div className={`${styles.skeleton} ${styles[type]}`}>{children}</div>
}

export default Skeleton
