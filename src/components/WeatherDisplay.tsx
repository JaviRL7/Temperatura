export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  return (
    <div className="weather-display bg-pink-200 p-6 rounded-lg border-2 border-gray-800 shadow-[8px_8px_0_0_#000] text-gray-800">
      <h2 className="text-2xl font-bold mb-2">{weatherData.name}</h2>
      <div className="flex items-center justify-center my-2">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          className="w-20 h-20"
        />
        <p className="text-5xl font-bold ml-2">{Math.round(weatherData.main.temp)}°C</p>
      </div>
      <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
      <p className="text-md mt-2">Humidity: {weatherData.main.humidity}%</p>
    </div>
  );
};

export default WeatherDisplay;