
// eslint-disable-next-line react/prop-types
export default function WeatherOtherInfo({weather}) {

    return (
      <div className='bg-white p-5 rounded-lg mt-5 flex flex-col items-start w-72 h-48'>
            <h4 className="pb-2 font-bold font-Secondary">Outras Informações</h4>
           <h4 className="font-Secondary">Min: {weather.main.temp_min}°C</h4>
           <h4 className="font-Secondary">Max: {weather.main.temp_max}°C</h4>
           <h4 className="font-Secondary">Umidade: {weather.main.humidity}%</h4>
           <h4 className="font-Secondary">Vento: {weather.wind.speed}m/s</h4>
           <h4 className="font-Secondary">Visibilidade: {weather.visibility/1000}km</h4>
      </div>
    );
   }