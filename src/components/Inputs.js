import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          type='text'
          className='text-xl font-white py-2 px-5 w-full shadow-xl capitalize rounded-full focus:outline-none'
        />
      </div>
    </div>
  );
};

export default Inputs;
