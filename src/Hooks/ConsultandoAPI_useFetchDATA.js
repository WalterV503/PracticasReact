import { useState } from "react"
import { ConsultandoAPI_fetchDATA } from "../Helpers/ConsultandoAPI_fetchDATA"
import { useEffect } from "react"

export const ConsultandoAPI_useFetchDATA = (endPoint) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        const { data, isLoading } = await ConsultandoAPI_fetchDATA(endPoint)
        setData(data)
        setIsLoading(isLoading)
    }

    useEffect(() => {
      getData()
    }, [endPoint])
    
  return {
    data,
    isLoading
  }

  
}
