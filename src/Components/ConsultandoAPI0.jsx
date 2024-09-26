import { ConsultandoAPI_useFetchDATA } from "../Hooks/ConsultandoAPI_useFetchDATA"

export const ConsultandoAPI0 = ({ endPoint }) => {
  const { data, isLoading } = ConsultandoAPI_useFetchDATA(endPoint)

  return (
    <>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : Array.isArray(data) ? (
          endPoint === 'users'
            ? data.map(item => <li key={item.id}>{item.name}</li>)
            : data.map(item => <li key={item.id}>{item.body}</li>)
        ) : (
          <p>No se encontraron datos.</p>
        )}
      </ul>
    </>
  )
}
