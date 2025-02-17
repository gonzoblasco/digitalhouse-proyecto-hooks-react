import { FetchList } from './components/FetchList.jsx'
import { useState } from 'react'

export const UsersApp = () => {
  const [endpoint, setEndpoint] = useState('users')

  return (
    <div>
      <h1>Lista:</h1>
      <FetchList endpoint={endpoint} />
      <button onClick={() => setEndpoint('comments')}>
        Cambiar el endpoint
      </button>
    </div>
  )
}
