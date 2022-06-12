import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons';

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        {/* Current weather effect */}
        <p>Clear</p>
      </div>
      <div className='flex flex-row items-center justify-between text-white py-3'>
        {/* Weather icon */}
        <img
          src='http://openweathermap.org/img/wn/01d@2x.png'
          alt=''
          className='w-20'
        />
        {/* Temperature */}
        <p className='text-5xl'> 34°</p>
        <div className='flex flex-col space-y-2'>
          {/* Weather details - to right of temperature */}
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
            Feels like:
            <span className='font-medium ml-1'>32°</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1' />
            Humidity:
            <span className='font-medium ml-1'>65%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1' />
            Wind:
            <span className='font-medium ml-1'>11 km/h</span>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        {/* Weather details - below temperature */}
        <UilSun />
        <p className='font-light'>
          Rise: <span className='font-medium ml-1'>06:45 AM</span>
        </p>
        <p className='font-light'>|</p>
        <UilSunset />
        <p className='font-light'>
          Set: <span className='font-medium ml-1'>07:35 PM</span>
        </p>
        <p className='font-light'>|</p>
        <UilArrowUp />
        <p className='font-light'>
          High: <span className='font-medium ml-1'>45°</span>
        </p>
        <p className='font-light'>|</p>
        <UilArrowDown />
        <p className='font-light'>
          Low: <span className='font-medium ml-1'>40°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;