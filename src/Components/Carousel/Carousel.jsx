import { useState } from 'react'
import cities from '../../../data/cities.json'
import './Carousel.css'


export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  const handleClickNext = () => {
    setActiveIndex(activeIndex + 1)
  }
  const handleClickPrev = () =>{
    setActiveIndex(activeIndex - 1)
  }
  
  return(
    <div className='slider'>
    {cities.map((city) => {
    return (
      <Slide
      key={city.id}
      slide={city} />
     )
  })}
  <button onClick={handleClickNext} id="next"> {">"}</button>
 <button onClick={handleClickPrev} id="prev">{"<"}</button>

  </div>
  )

  }

  