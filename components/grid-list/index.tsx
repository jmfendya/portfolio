import Image from "next/image"
import styles from "./grid-list.module.css"

const GridList = () => {
  return (
    <div className={styles["grid-4"]}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="flex flex-col" key={i}>
          <div className=" bg-white rounded-lg border border-gray-200 shadow-md ">
            <a href="#">
              <Image
                src="/placeholder-image.png"
                layout="responsive"
                alt="test image"
                width={292}
                height={219}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Project {++i}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                commodi voluptas impedit pariatur distinctio.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridList
