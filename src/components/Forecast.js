import { iconUrlFromCode } from '../services/weatherService';

const Forecast = ({ title, items }) => {
  return (
    <div>
      <div className='flex items-center justify-start mt-6'>
        {/* Forecast Title */}
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='my-2' />

      <div className='flex flex-row flex-wrap items-center justify-between text-white'>
        {/* Forecast list */}
        {items.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center'
          >
            <p className='font-light text-sm'>{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
