import { useEffect, useState } from 'react'
import { useFetchData } from '../../../hooks/useFetchData.js'

// eslint-disable-next-line react/prop-types
export const FetchList = ({ endpoint }) => {
  const { data, isLoading } = useFetchData({ endpoint })

  return (
    <>
      <ul>
        {isLoading ? (
          <p>Cargando...</p>
        ) : endpoint === 'users' ? (
          data.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          data.map((item) => <li key={item.id}>{item.body}</li>)
        )}
      </ul>
    </>
  )
}
