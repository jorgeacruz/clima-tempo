
import { useRef, useState } from 'react'
import axios from 'axios'


import WeatherInfo from './components/WeatherInfo'
import WeatherOtherInfo from './components/WeatherOtherInfo'
import WeatherLatLong from './components/WeatherLatLong'

function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const Key = 'b1b35bba8b434a28a0be2a3e1071ae5b'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
    console.log(apiInfo.data)
  }

  function clear(){
    setWeather()
    inputRef.current.value = ''
    }

  
  return (
    <div className='bg-gradient-to-r from-orange-500 to-red-500 w-full h-screen flex flex-col justify-start items-center pt-36'>
        <div>
          <h1 className=' text-white text-2xl md:text-5xl sm:text-3xl font- font-Secondary'>Previsão do Tempo</h1>
          <div className='pt-5'>
            <input type='text' ref={inputRef} className='w-52 rounded-l-full p-1 text-center' placeholder='Digite sua cidade' />
            <button className='w-32 rounded-r-full p-1 bg-black text-white' onClick={searchCity}>
              <text className='text-sm font-thin'>Pesquisar</text>
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-2 items-center'>
          {weather && <WeatherInfo weather={weather}/>} 
          {weather && <WeatherOtherInfo weather={weather}/>}
          {weather && <WeatherLatLong weather={weather}/>}
        </div>
        {weather && <h1 className='text-2xl font-bold mt-5'>Previsão para os próximos 5 dias</h1>}
        {weather && <h1 className='text-2xl font-bold mt-5'>Mapa de Previsão</h1>} 
        {weather &&
          <button className='w-32 rounded-full p-1 bg-black text-white mt-5' onClick={clear}>
          <text className='text-sm font-thin'>Limpar Consulta</text>
          </button>
        }
    </div>
  )
}

export default App
