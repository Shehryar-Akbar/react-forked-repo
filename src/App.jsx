import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("blue")
  return (
    <>
      <div className='back-ground w-full h-screen duration-200'
        style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-white'> 
            <button 
              onClick={() => setColor('red')}
              className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
              style={{backgroundColor: "red",  cursor: 'pointer'}}
            >red</button>
            <button 
              onClick={() => setColor('green')}
              className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
              style={{backgroundColor: "green", cursor: 'pointer'
              }}
            >green</button>
            <button 
              onClick={() => setColor('blue')}
              className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
              style={{backgroundColor: "blue",  cursor: 'pointer'}}
            >blue</button>
            <button 
              onClick={() => setColor('orange')}
              className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
              style={{backgroundColor: "orange",  cursor: 'pointer'}}
            >Orange</button>
            <button 
              onClick={() => setColor('yellow')}
              className=' outline-none px-4 py-2 rounded-full text-white shadow-lg' 
              style={{backgroundColor: "yellow",  cursor: 'pointer'}}
            >Yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
