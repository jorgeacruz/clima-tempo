
// eslint-disable-next-line react/prop-types
export default function WeatherInfo({weather}) {

 return (
     <div className='bg-white p-5 rounded-lg mt-5 flex flex-col items-start h-48'>
       <h4 className="font-bold text-lg pb-4 font-Primary text-red-600">Sensação Térmica: {weather.main.feels_like}°C</h4>
        <h1 className="font-bold text-2xl font-Primary">{weather.name}</h1>
        <h2 className="font-semibold capitalize font-Primary">{weather.weather[0].description}</h2>
        <h3 className="font-bold text-4xl font-Primary">{Math.round(weather.main.temp)}°C</h3>
   </div>
 );
}