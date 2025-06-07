import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ItinerarPage } from "./pages/ItinerarPage/ItinerarPage"
import { MestoPage } from "./pages/MestoPage/MestoPage"

export const App = () => {

  return(
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/mesto" element={<MestoPage />}/>
                  <Route path="/itinerar" element={<ItinerarPage />}/>
              </Routes>
          </BrowserRouter>
  )
}
