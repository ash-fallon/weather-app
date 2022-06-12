const TimeAndLocation = () => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        {/* Date and time */}
        <p className='text-white text-xl font-extralight'>
          Tuesday, 31 May 2022 | Local time: 12:46 PM
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        {/* Current selected location */}
        <p className='text-white text-3xl font-medium'>Berlin, DE</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
