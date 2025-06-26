import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay, { type WeatherData } from './components/WeatherDisplay';
import { FiSearch } from 'react-icons/fi';
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState('London');

  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCity((e.target as HTMLInputElement).value);
    }
  };

  const getBackgroundColor = (temp: number) => {
    if (temp > 40) return 'bg-red-pastel';
    if (temp >= 30) return 'bg-orange-pastel';
    if (temp >= 20) return 'bg-green-pastel';
    if (temp >= 10) return 'bg-blue-pastel-light';
    return 'bg-blue-pastel-dark';
  };

  const getWarningMessage = (temp: number) => {
    if (temp > 40) return '¡Precaución! Temperaturas muy altas. Beba mucha agua.';
    return null;
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!city) return;
      setLoading(true);
      setError(null);
      setWeatherData(null);
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (err) {
        setError('City not found. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (apiKey && apiKey !== 'tu_api_key') {
      fetchWeatherData();
    } else {
      setError('Please add your OpenWeatherMap API key to the .env.local file.');
      setLoading(false);
    };
  }, [city, apiKey]);

  const currentTemp = weatherData?.main?.temp || 0;
  const backgroundColorClass = getBackgroundColor(currentTemp);
  const warningMessage = getWarningMessage(currentTemp);

  return (
    <div className={`min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center p-8 font-sans text-gray-800 transition-colors duration-500 ${backgroundColorClass}`}>

      {/* Left Section: Personal Info */}
      <div className="w-full md:flex-1 flex flex-col items-center md:items-end mb-8 md:mb-0 md:mr-8 text-right">
        <img src="/foto1.jpeg" alt="Javier Rodriguez Lopez" className="w-64 h-auto rounded-lg object-cover mb-4 shadow-lg" />
        <h1 className="text-4xl font-bold text-pink-400 mb-4 text-center md:text-right">Javier Rodriguez Lopez</h1>
        <p className="text-lg mb-2">Full-stack Developer</p>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <a href="https://www.linkedin.com/in/javier-rodriguez-lopez-4795a8180/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
            LinkedIn <FaLinkedin className="ml-2" />
          </a>
          <a href="mailto:Jrlsanlucar11@gmail.com" className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200">
            Jrlsanlucar11@gmail.com <FaEnvelope className="ml-2" />
          </a>
          <a href="/cv_javier_es.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
            Download CV (ES) <FaFileAlt className="ml-2" />
          </a>
          <a href="/cv_javier_en.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-green-600 transition-colors duration-200">
            Download CV (EN) <FaFileAlt className="ml-2" />
          </a>
        </div>
      </div>

      {/* Separator */}
      <div className="hidden md:flex h-64 mx-16 items-center justify-center relative">
        <div className="absolute w-1 h-6 bg-pink-400/50 rounded-full animate-dot-vertical"></div>
      </div>

      {/* Right Section: Weather App */}
      <div className="w-full md:flex-1 flex flex-col items-center md:items-start">
        <div className="w-full max-w-xs mb-6">
          <div className="search-bar relative flex items-center">
            <input
              type="text"
              onKeyDown={handleSearch}
              placeholder="Search for a city..."
              className="w-full py-2 pl-4 pr-10 rounded-lg border-2 border-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <FiSearch className="h-5 w-5 absolute right-3 text-gray-500" />
          </div>
        </div>
        {loading && <p className="text-center text-xl">Loading...</p>}
        {error && <p className="text-center text-xl">{error}</p>}
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
        {warningMessage && <p className="text-center text-lg mt-4 text-red-600 font-semibold">{warningMessage}</p>}
      </div>
    </div>
  );
};

export default App;