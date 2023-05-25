import React, { useState } from "react";

const api = {
  key: "a36c5872106b4a1bf43b2e0c424fafed",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
  const [search, setSearch] = useState("istanbul");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log("x" + setWeather);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchPressed();
    }
  };

  return (
    <div className="flex flex-col gap-2 hakkimizdaDesign justify-cnter items-center">
      <h1 className="colorOrange text-3xl">Hava Durumu</h1>
      <div className="flex gap-2">
        <input
          className="p-2 iletisim1 border border-solid border-gray-300 rounded-md text focus:outline-none focus:ring-1 focus:ring-blue-500 focus:shadow-lg"
          type="text"
          placeholder="Şehir"
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="borderSubmit hover:bg-sky-200 p-0.5 rounded-md text cursor-pointer"
          onClick={searchPressed}
        >
          Ara
        </button>
      </div>
      {typeof weather.main !== "undefined" ? (
        <div className="w-[80%] min-w-[80%] rounded-lg flex flex-col gap-2 items-center bg-[url('https://png.pngtree.com/background/20210714/original/pngtree-white-cloud-on-blue-sky-weather-background-picture-image_1229456.jpg')]">
          {/* Location  */}
          <p className="text-xl">{weather.name}</p>

          {/* Temperature Celsius  */}
          <p className="text-xl">{weather.main.temp}°C</p>

          {/* Condition (Sunny ) */}
          <p className="text-xl">{weather.weather[0].main}</p>
          <p className="text-xl">({weather.weather[0].description})</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherApp;
