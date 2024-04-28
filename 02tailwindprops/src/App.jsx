import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let userData = {
    username : 'sam'
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>tailwind css</h1>
      <Card youtube = 'chaiaurcode' data = {userData} />
      <Card/>
    </>
  )
}

export default App
