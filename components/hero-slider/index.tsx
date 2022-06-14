import {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  useState,
} from "react"
import { useKeenSlider } from "keen-slider/react"
import Arrow from "./arrow"
import "keen-slider/keen-slider.min.css"
import styles from "./hero-slider.module.css"

interface SliderProps {
  children: ReactNode
  looped?: boolean
}

const HeroSlider = ({ children, looped }: SliderProps) => {
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: looped,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <div className={styles["slider-wrapper"]}>
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

      {looped && (
        <>
          {/* NAVIGATION ARROWS */}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
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
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx)
                    }}
                    className={
                      styles.dot + (currentSlide === idx ? " active" : "")
                    }
                  ></button>
                )
              })}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default HeroSlider
