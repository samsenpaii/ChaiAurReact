import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div className="text-white bg-cyan-700  text-3xl p-4"> User: {userId}</div>
  )
}

export default User