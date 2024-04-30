import { useState , useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber , setIsNumber] = useState(false)
  const [isChar , setIsChar] = useState(false)
  const [password , setPassword] = useState()
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( ()=>{
    let pass = ''
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'

    if(isNumber){
      str += '1234567890'
    }
    if(isChar){
      str += '!@#$%^^&*:;<>,.'
    }

    for( let i = 1; i<= length ; i++){
      let char = Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length , isNumber , isChar , setPassword])

  const copyPasswordToClipBord = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }
  ,[length , isChar , isNumber , passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg shadow-md px-4 py-3 text-orange-500 my-8  bg-gray-700' >
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3' 
          placeholder='password'
          ref={passwordRef}
          readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipBord}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            
            <input type="range" min={6}  max={100} value={length} 
            className='cursor-pointer'  
            onChange={(e)=>{ setLength(e.target.value)}} 
            />
            <label>length: {length}</label>

            <input type="checkbox"
            defaultChecked = {isNumber}
            id='numberInput'
            onClick={()=>{setIsNumber((prev)=> !prev)}} />
            <label htmlFor='isNumber'>Number</label>

            <input type="checkbox"
            defaultChecked = {isChar}
            id='numberInput'
            onClick={()=>{setIsChar((prev)=> !prev)}} />
            <label htmlFor='isChar'>special char</label>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
