import { HomePage } from "./pages/HomePage"
import { MestoPage } from "./pages/MestoPage"
import { ItinerarPage } from "./pages/MestoPage"


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
