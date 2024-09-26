import { NavBar } from "./Components/NavBar"
import { Home } from "./Components/Home"
import { ConsultandoAPI } from "./Components/ConsultandoAPI"
import { Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ConsultandoAPI' element={<ConsultandoAPI></ConsultandoAPI>}></Route>
        <Route></Route>
        <Route></Route>
    </Routes>
    </>
  )
}
