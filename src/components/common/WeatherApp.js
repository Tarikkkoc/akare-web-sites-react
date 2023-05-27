import React, { useEffect, useState } from "react";

const api = {
  key: "a36c5872106b4a1bf43b2e0c424fafed",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
  const [search, setSearch] = useState("istanbul");
  const [weather, setWeather] = useState({});
  useEffect(() => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  }, []);
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
    <div className="flex w-[30%] min-w-[30%] flex-col gap-2 weather justify-cnter items-center">
      <h1 className="colorOrange text-3xl">Weather</h1>
      <div className="flex gap-2">
        <input
          className="p-2 iletisim1 border border-solid border-gray-300 rounded-md text focus:outline-none focus:ring-1 focus:ring-blue-500 focus:shadow-lg"
          type="text"
          placeholder="City"
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="borderSubmit hover:bg-sky-200 p-0.5 rounded-md text cursor-pointer"
          onClick={searchPressed}
        >
          Search
        </button>
      </div>
      {typeof weather.main !== "undefined" ? (
        <div className="w-[80%] min-w-[80%] rounded-lg flex flex-col gap-2 items-center bgd-[url('https://png.pngtree.com/background/20210714/original/pngtree-white-cloud-on-blue-sky-weather-background-picture-image_1229456.jpg')]">
          {/* <p className="text-xl">{weather.name}</p>
          <p className="text-xl">{weather.main.temp}°C</p>
          <p className="text-xl">{weather.weather[0].main}</p>
          <p className="text-xl">({weather.weather[0].description})</p> */}
          <div className="container mx-auto flex justify-center">
            <table className="border border-gray-300">
              <thead>
                <tr>
                  <th className="border-b border-gray-300 px-4 py-2 text">
                    Temp
                  </th>
                  <th className="border-b border-gray-300 px-4 py-2 text">
                    Weather
                  </th>
                  <th className="border-b border-gray-300 px-4 py-2 text">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-300 px-4 py-2 text">
                    {weather.main.temp}°C
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2 text">
                    {weather.weather[0].main}
                  </td>
                  <td className="border-b border-gray-300 px-4 py-2 text">
                    {weather.weather[0].description}
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <div className="grid place-items-center">
                      <h1 className="text-2xl">{weather.name}</h1>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherApp;
