import { useEffect, useState } from "react"
import type { InferGetStaticPropsType } from "next"
import Image from "next/image"
import { fetcher } from "lib/contentful/fetchGraphQL"
import { GET_HOME_PAGE } from "graphQL/queries"
import HeroSlider from "components/hero-slider"
import GridList from "components/grid-list"
import SkeletonHero from "components/skeleton/hero"
import SkeletonCardGrid from "components/skeleton/card-grid"

type SliderImage = {
  sys: { id: string }
  url: string
  width: number
  height: number
  alt: string
  title: string
  fileName: string
}

export const getStaticProps = async () => {
  const { data, error } = await fetcher(GET_HOME_PAGE)

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
      projects: data.projectCollection.items,
      error,
    },
  }
}

export const Home = ({
  error,
  images,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const looped = images.length > 1
  const projectNum = projects.length <= 3 ? 4 : projects.length

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    // setIsLoading(false)
  }, [isLoading])

  // TODO: Handle Errors

  if (isLoading)
    return (
      <>
        <SkeletonHero />
        <SkeletonCardGrid projectNum={projectNum} />
      </>
    )

  return (
    <main>
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

      <GridList projects={projects} />
    </main>
  )
}

export default Home
