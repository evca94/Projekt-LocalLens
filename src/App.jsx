import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ItinerarPage } from "./pages/ItinerarPage/ItinerarPage"
import { MestoPage } from "./pages/MestoPage/MestoPage"
import  cities from '../data/cities.json'
import  itinerary from '../data/calendar'

export const App = () => {
console.log(cities)


  return(
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/mesto" element={<MestoPage city={cities[1]} />}/>
                  <Route path="/itinerar" element={<ItinerarPage dayTitle={itinerary[3] } />}/>
              </Routes>
          </BrowserRouter>
  )
}
