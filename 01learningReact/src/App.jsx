import { useState } from "react"

function App() {

  let [counter , setCounter] = useState(5)
  let count = 15

  const increment = ()=>{
    // console.log('clikced');
    setCounter(++counter)
  }

  const decrement = ()=>{
    // console.log('decrese clicked');
    if(counter > 0 ){
      setCounter(--counter)
    }
  }

  return (
    <>
    <h1>hello from vite app</h1>
    <h2>count is {counter}</h2>
    <button onClick={increment}>increse count</button>
    <br />
    <button onClick={decrement}>reduce count</button>
    </>
    
  )
}

export default App
