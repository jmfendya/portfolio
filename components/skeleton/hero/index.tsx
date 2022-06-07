import Skeleton from "../index"
// import Shimmer from "../shimmer"
import styles from "../skeleton.module.css"

const SkeletonHero = () => {
  const icon = true

  return (
    <div className={styles["skeleton-wrapper"]}>
      <div className="skeleton-hero">
        <Skeleton type="hero">
          {/* Icon */}
          <div className="flex justify-center items-center h-full">
            {icon && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-32 w-32"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </Skeleton>
      </div>
      {/* <Shimmer /> */}
    </div>
  )
}

export default SkeletonHero
