import React, { useState } from "react";

const Home = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        if (!city) {
            setError("Please enter a city name.");
            return;
        }
        setError("");
        try {
            const apiKey = "59930bab748b11cb895dccfde156c01c";
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            );
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
            <h1 className="text-3xl font-bold mb-4">Weather App</h1>
            <div className="flex items-center space-x-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={fetchWeather}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Fetch Weather
                </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {weather && (
                <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md">
                    <h2 className="text-xl font-bold mb-2">{weather.name}</h2>
                    <p className="text-gray-700">
                        Temperature: {weather.main.temp}°C
                    </p>
                    <p className="text-gray-700">
                        Weather: {weather.weather[0].description}
                    </p>
                    <p className="text-gray-700">
                        Humidity: {weather.main.humidity}%
                    </p>
                    <div className="flex justify-center mt-4">
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt="weather icon"
                            className="w-16 h-16"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;