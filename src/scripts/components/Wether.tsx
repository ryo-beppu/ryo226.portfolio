import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {WeatherProps} from './WeatherProps';

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherProps>();

  useEffect(async ()=> {
      const result = await axios('http://api.openweathermap.org/data/2.5/weather?q=Yokohama&appid=bf2836e4b535547b1e7b8f0c3844db4f');
      setWeatherData(result.data);
  });

  return (
    <div id="load">
      <div id="loadAnim" />
    </div>
  );
};

export default Weather;
