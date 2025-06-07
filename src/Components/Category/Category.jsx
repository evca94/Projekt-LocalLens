import { BodProgramu } from "../BodProgramu/BodProgramu"
import { NazevActivity } from "../NazevActivity/NazevActivity"

export const Category = ({name, items} ) => {
  
if (!items || items.length === 0) {
  return null
}


 return (
    <div>
    
  <NazevActivity 
  activity={name} />
  {items.map((item) => {
    
    return ( 
    <BodProgramu
     key={item.name}
     program={item} />
  )
  })}
  </div>
 )

}
