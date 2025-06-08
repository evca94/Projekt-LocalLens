import './slide.css'
export const Slide = ({slide}) => {
  
  return (
    <>
<div class="item">
   <h1>{slide.name} </h1>
   <div> {slide.description}</div>
 </div>
</>
  )
};
