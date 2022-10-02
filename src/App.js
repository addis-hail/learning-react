import React from 'react';

import WeatherCard from './components/WeatherCard/component';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={3} condition = "Clear" city = "Sydney" country="AU"/>
      <WeatherCard temp={20} condition = "Clouds" city = "Melbourne" country="AU"/>
      <WeatherCard temp={40} condition = "Clear" city = "London" country="GB"/>
    </div>
  );
}

export default App;
