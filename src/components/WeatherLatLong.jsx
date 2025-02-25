
// eslint-disable-next-line react/prop-types
export default function WeatherLatLong({weather}) {

    return (
      <div className='bg-white p-5 rounded-lg mt-5 flex flex-col items-start w-72 h-48'>
            <h4 className="pb-2 font-bold font-Secondary">Localização</h4>
            <h4 className="font-Secondary">Latitude: {weather.coord.lat}</h4>
            <h4 className="font-Secondary">Longitude: {weather.coord.lon}</h4>
      </div>
    );
   }