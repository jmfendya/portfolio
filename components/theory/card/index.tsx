import Image from "next/image"
import { Theory } from "types"

type TheoryCardProps = {
  theory: Theory
}

const TheoryCard = ({ theory }: TheoryCardProps) => {
  return (
    <>
      <article className="grid sm:grid-cols-3 gap-8">
        {/* SYMBOL */}
        <div className="flex justify-center items-center">
          <Image
            key={theory.symbol.sys.id}
            src={theory.symbol.url}
            width={theory.symbol.width}
            height={theory.symbol.height}
            alt={theory.symbol.title}
            layout="raw"
          />
        </div>

        {/* DESCRIPTION */}
        <div className="description sm:col-span-2">
          <h2>{theory.title}</h2>

          <p>{theory.content}</p>
        </div>
      </article>
    </>
  )
}

export default TheoryCard
