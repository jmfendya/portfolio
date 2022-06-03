import Image from "next/image"
import styles from "./grid-list.module.css"

const GridList = () => {
  return (
    <div className={styles["grid-4"]}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="flex flex-col" key={i}>
          <Image
            src="/placeholder-image.png"
            layout="responsive"
            alt="test image"
            width={292}
            height={219}
          />
          <div style={{ textAlign: "center" }}>Project #</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptatum nesciunt corporis, voluptatibus odio corrupti officia
            veniam error veritatis vitae?
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridList
