import { useState } from 'react'
import cities from '../../../data/cities.json'
import './Carousel.css'
import { Slide } from '../Slide/Slide'



export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const handleClickNext = () => {
    if (activeIndex === cities.length - 1) {
      setActiveIndex(0)
    } else {
    setActiveIndex(activeIndex + 1)
  }}
  const handleClickPrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(cities.length - 1)
    } else {
    setActiveIndex(activeIndex - 1)
  }
  }
  
  return(
    <div className='slider'>
    {cities.map((city, index) => {
    return (
      <Slide
      key={city.id}
      slide={city}
      slideIndex={index}
      activeIndex={activeIndex}
      />
     )
  })}
  <button onClick={handleClickNext} id="next"> {">"}</button>
  <button onClick={handleClickPrev} id="prev">{"<"}</button>

  </div>
  )

  }

  