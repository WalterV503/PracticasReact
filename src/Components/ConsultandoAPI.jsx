import { useState } from "react"
import { ConsultandoAPI_fetchDATA } from "../Helpers/ConsultandoAPI_fetchDATA"
import { ConsultandoAPI0 } from '../Components/ConsultandoAPI0'
export const ConsultandoAPI = () => {

   const [endPoint, setendPoint] = useState('users')
   const handleFetch = () => {
    setendPoint('comments')
   }
  return (
    <>
    <h6>Lista de Usuarios</h6>
   <ConsultandoAPI0 endPoint={endPoint}></ConsultandoAPI0>
   <button onClick={handleFetch}>Llamando API</button>
    </>
  )
}
