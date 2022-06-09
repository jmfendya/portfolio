import Skeleton from "../index"
import Shimmer from "../shimmer"
import styles from "../skeleton.module.css"

type SkeletonCardGridProps = {
  projectNum: number
}

const SkeletonCardGrid = ({ projectNum }: SkeletonCardGridProps) => {
  return (
    <div className={styles["grid-4"]}>
      {/* LIST */}
      {Array.from({ length: projectNum }).map((_, i) => (
        <div className={`flex flex-col `} key={i}>
          {/* CARD */}
          <div className={`${styles["skeleton-card"]} `}>
            {/* IMAGE */}
            <Skeleton type="card-img" />
            {/* CONTENT */}
            <div className={`${styles["skeleton-wrapper"]}`}>
              <div className={styles["card-content"]}>
                <Skeleton type="title" />
                <Skeleton type="text" />
                <Skeleton type="text" />
                <Skeleton type="text" />
                <Skeleton type="button" />
              </div>
              <Shimmer />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkeletonCardGrid
