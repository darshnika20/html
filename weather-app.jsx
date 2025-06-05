import React, { useState } from "react";
import axios from "axios";


const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  // Fetch weather data
  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(BASE_URL);
      setWeather(response.data);
    } catch (err) {
      setError("City not found. Try again!");
      setWeather(null);
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Weather App </h2>

      {/* City Input */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {/* Loading Indicator */}
      {loading && <p>Fetching weather data...</p>}

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display Weather Data */}
      {weather && (
        <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", marginTop: "10px" }}>
          <h3>{weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
