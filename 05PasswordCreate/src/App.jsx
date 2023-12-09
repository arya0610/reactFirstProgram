import { useState,useCallback, useEffect ,useRef} from 'react'
function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed, setNumberAllowed]=useState(false)
  const[charachterAllowed, setCharachterAllowed]=useState(false)
  const [password, setPassword] = useState("")

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(() => {
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed)  str += "0123456789"
    if(charachterAllowed) str += "!@#$%^&_+=[]{}`~*"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)     
    }
    setPassword(pass)
  }, [length, numberAllowed, charachterAllowed, setPassword])

  const copyPassworClipbord=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charachterAllowed,passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-1 text-orange-500 bg-gray-700 text-center py-8'>
      <h1>Generate Password</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-2 px-8'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button onClick={copyPassworClipbord}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=>setLength(e.target.value)}
          />
          <label >Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=>!prev);
          }}
           />
           <label htmlFor="numberInput">Numbers</label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charachterAllowed}
          id='charachterInput'
          onChange={()=>{
            setCharachterAllowed((prev)=>!prev);
          }}
           />
           <label htmlFor="charachterInput">charachters</label>

        </div>
      </div>

    </div>

     </>
  )
}

export default App
