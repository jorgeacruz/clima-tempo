import {  } from 'react'

import './App.css'

function App() {
 

  return (
    <div className='bg-gradient-to-r from-orange-500 to-red-500 w-full h-screen flex justify-center items-start pt-36'>
        <div>
          <h1 className=' text-2xl md:text-5xl sm:text-3xl font-bold'>Previsão do Tempo</h1>
          <div className='pt-5'>
            <input className='w-52 rounded-l-full p-1 text-center' placeholder='Digite sua cidade' />
            <button className='w-32 rounded-r-full p-1 bg-black text-white'>
              <text className='text-sm font-thin'>Pesquisar</text>
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
