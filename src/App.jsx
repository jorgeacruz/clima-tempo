import { useRef, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import './App.css'

import WeatherInfo from './components/WeatherInfo'
import WeatherOtherInfo from './components/WeatherOtherInfo'
import WeatherLatLong from './components/WeatherLatLong'
import Weather5days from './components/Weather5days'

function App() {

  // estado para armazenar as informações do tempo
  const [weather, setWeather] = useState()
  const [weatherForecast, setWeatherForecast] = useState()

  // referência para o input
  const inputRef = useRef()

  async function searchCity(){
    // condicional para verificar se o input está vazio
    if(!inputRef.current.value){
      toast.error('Digite o nome do lugar!');
      return;
    }
    // cidade digitada
    const city = inputRef.current.value
    const Key = 'b1b35bba8b434a28a0be2a3e1071ae5b'

    // info tempo atual
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&lang=pt_br&units=metric`
    // info tempo 5 dias
    const weather5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Key}&lang=pt_br&units=metric`

    // info tempo atual
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)

    // info tempo 5 dias
    const apiForecast = await axios.get(weather5days)
    setWeatherForecast(apiForecast.data)

    // console.log(apiForecast.data)
    //console.log(apiForecast)
    console.log(apiInfo.data)
  }

  // limpar a consulta
  function clear(){
    setWeather()
    inputRef.current.value = ''
    }

  
  return (
    <div className='bg-gradient-to-r from-orange-500 to-red-500 w-full h-screen flex flex-col justify-start items-center pt-36'>
        <div>
          <h1 className=' text-white text-2xl md:text-5xl sm:text-3xl font-thin'>Previsão do Tempo</h1>
          <div className='pt-5'>
            <input type='text' ref={inputRef} className='w-52 rounded-l-full p-1 text-center' placeholder='Digite o nome do lugar!' />
            <button className='w-32 rounded-r-full p-1 bg-black text-white' onClick={searchCity}>
              <text className='text-sm font-thin'>Pesquisar</text>
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row md:gap-2 items-center'>
          { weather && <WeatherInfo weather={weather}/> } 
          { weather && <WeatherOtherInfo weather={weather}/> }
          { weather && <WeatherLatLong weather={weather}/> }
        </div>
        <div className='flex flex-col items-center p-6'>
          { weather && 
            <h1 className='text-2xl text-white font-thin mt-5'>Previsão para os próximos 5 dias</h1>
          }
          { weather && 
            <Weather5days weatherForecast={weatherForecast}/>
          }
        </div>
        <div className='mt-6'>
          {
            weather &&
            <button className='w-32 rounded-full p-1 bg-black text-white' onClick={clear}>
              <text className='text-sm font-thin'>Limpar Consulta</text>
            </button>

          }
        </div>
        <ToastContainer />
    </div>
  )
}

export default App
