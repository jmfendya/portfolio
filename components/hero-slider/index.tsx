import { useState } from "react"
import { ReactNode, Children, isValidElement, cloneElement } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Arrow from "./arrow"
import styles from "./hero-slider.module.scss"

interface SliderProps {
  children: ReactNode
}

const HeroSlider = ({ children }: SliderProps) => {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const loop = true

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop,
    created() {
      setLoaded(true)
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <div className={styles["navigation-wrapper"]}>
      <div ref={sliderRef} className="keen-slider">
        {/* BUILD SLIDES FROM CHILDREN */}
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child

          const childClassName = child.props.className

          return cloneElement(child, {
            className: `${
              childClassName ? `${childClassName}` : ""
            } keen-slider__slide`,
          })
        })}
      </div>

      {/* NAVIGATION ARROWS */}
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={!loop && currentSlide === 0}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              !loop &&
              currentSlide ===
                instanceRef.current.track.details.slides.length - 1
            }
          />
        </>
      )}

      {/* NAVIGATION DOTS */}
      {loaded && instanceRef.current && (
        <div className={styles.dots}>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={styles.dot + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default HeroSlider
