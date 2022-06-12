import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
      {/* Search bar */}
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          type='text'
          placeholder='Search for cities...'
          className='text-xl font-white p-2 w-full shadow-xl capitalize rounded-sm focus:outline-none placeholder:lowercase'
        />
        {/* Search bar icons */}
        <UilSearch
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />
        <UilLocationPoint
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
        />
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        {/* Celsius / Farenheit toggle */}
        <button name='metric' className='text-xl text-white font-medium'>
          °C
        </button>
        <p className='text-xl text-white font-light mx-1'>|</p>
        <button name='imperial' className='text-xl text-white font-medium'>
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
