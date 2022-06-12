import { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState('');

  const searchClickHandler = () => {
    if (city !== '') {
      setQuery({ q: city });
    }
  };

  const locationClickHandler = () => {
    if (navigator.geolocation) {
      toast.info(`Fetching users location.`);
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const unitsClickHandler = e => {
    const selectedUnit = e.currentTarget.name;

    if (units !== selectedUnit) {
      setUnits(selectedUnit);
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      {/* Search bar input */}
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={e => setCity(e.target.value)}
          type='text'
          placeholder='Search for cities...'
          className='text-xl font-white p-2 w-full shadow-xl capitalize rounded-sm focus:outline-none placeholder:lowercase'
        />
        {/* Search bar icons */}
        <UilSearch
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={searchClickHandler}
        />
        <UilLocationPoint
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={locationClickHandler}
        />
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        {/* Celsius / Farenheit toggle */}
        <button
          name='metric'
          className='text-xl text-white font-medium transition ease-out hover:scale-125'
          onClick={unitsClickHandler}
        >
          °C
        </button>
        <p className='text-xl text-white font-light mx-1'>|</p>
        <button
          name='imperial'
          className='text-xl text-white font-medium transition ease-out hover:scale-125'
          onClick={unitsClickHandler}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
