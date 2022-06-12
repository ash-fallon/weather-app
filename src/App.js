import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

const App = () => {
  const [query, setQuery] = useState({ q: 'Berlin' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.';

      toast.info('Fetching weather for ' + message);

      await getFormattedWeatherData({ ...query, units }).then(data => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`,
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-700 to-blue-700';

    const threshold = units === 'metric' ? 20 : 60;

    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700';

    return 'from-yellow-700 to-orange-700';
  };

  return (
    <>
      <div className='w-full h-screen md:pt-4 bg-gradient-to-br from-blue-700 to-amber-700'>
        <div
          className={`w-screen md:mx-auto md:max-w-screen-md py-5 px-8 md:px-32 md:rounded-xl bg-gradient-to-br ${formatBackground()} h-fit shadow-lg shadow-gray-700`}
        >
          <TopButtons setQuery={setQuery} />
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
          {weather && (
            <>
              <TimeAndLocation weather={weather} />
              <TemperatureAndDetails weather={weather} />
              <Forecast title='Hourly Forecast' items={weather.hourly} />
              <Forecast title='Daily Forecast' items={weather.daily} />
            </>
          )}
        </div>
        <ToastContainer autoClose={3000} theme='colored' newestOnTop={true} />
      </div>
    </>
  );
};

export default App;
