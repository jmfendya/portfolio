import type { InferGetStaticPropsType } from "next"
import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_HOME_SLIDER_COLLECTION } from "graphQL/queries"
import HeroSlider from "components/hero-slider"
import Image from "next/image"
import { Suspense, useEffect, useState } from "react"

type SliderImage = {
  url: string
  width: number
  height: number
  alt: string
  sys: {}
  title: string
  fileName: string
}

export const getStaticProps = async () => {
  const { data, error } = await fetcher(GET_HOME_SLIDER_COLLECTION)

  // TODO: Check for errors
  if (error) {
    return {
      props: {
        error,
        data,
      },
    }
  }

  const { sliderImagesCollection } = data.homeSliderCollection.items[0]

  return {
    props: {
      images: sliderImagesCollection.items,
      error,
    },
  }
}

export const Home = ({
  error,
  images,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const looped = images.length > 1

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])

  // TODO: Handle Errors

  if (isLoading)
    return (
      <Image
        src={images[0].url}
        width={images[0].width}
        height={images[0].height}
        alt={images[0].title}
        layout="raw"
        priority
      />
    )

  return (
    <>
      <HeroSlider looped={looped}>
        {images.map((image: SliderImage, index: number) => (
          <Image
            key={index}
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.title}
            layout="raw"
            priority
          />
        ))}
      </HeroSlider>

      <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xs:gap-12 sm:gap-10 md:gap-8">
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
    </>
  )
}

export default Home
