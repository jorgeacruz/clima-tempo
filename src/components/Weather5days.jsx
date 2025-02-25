
// eslint-disable-next-line react/prop-types
export default function Weather5days({weatherForecast}) {

    return (
        <div className='p-5 rounded-lg mt-5 flex flex-col items-start h-48'>
            <div className='flex flex-col md:flex-row gap-2'>
            {weatherForecast && weatherForecast.list && weatherForecast.list.filter((item, index, self) => 
                index === self.findIndex((t) => (
                new Date(t.dt_txt).toLocaleDateString('pt-BR') === new Date(item.dt_txt).toLocaleDateString('pt-BR')
                ))
            ).slice(0, 5).map((item, index) => {
                return (
                <div key={index} className='bg-white p-4 rounded-lg flex flex-col items-start'>
                    <h1 className='font-bold text-sm'>{new Date(item.dt_txt).toLocaleDateString('pt-BR')}</h1>
                    <h2 className='font-bold text-3xl'>{item.main.temp}°C</h2>
                    <h2 className='font-bold capitalize text-red-600 pb-3'>Sensação: {item.main.feels_like}°C</h2>
                    <h2 className='font-bold capitalize'>{item.weather[0].description}</h2>
                    <h2 className='font-bold'>Max: {item.main.temp_max}°C</h2>
                    <h3 className='font-bold'>Min: {item.main.temp_min}°C</h3>
                </div>
                )
            })}
            </div>
        </div>
        );
   }