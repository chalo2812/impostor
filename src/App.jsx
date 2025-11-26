import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App(){
  const [data, setData] = useState(null)
  const apiUrl = import.meta.env.VITE_API_URL || 'https://jsonplaceholder.typicode.com'

  useEffect(()=>{
    axios.get(`${apiUrl}/todos/1`)
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [apiUrl])

  return (
    <div className="container py-5">
      <h1 className="mb-4">Impostor App</h1>
      <div className="card p-3">
        <pre>{data ? JSON.stringify(data, null, 2) : 'Cargando...'}</pre>
      </div>
    </div>
  )
}
