import React from "react";
import { Link } from "react-router-dom";
import WeatherApp from "./WeatherApp";
import Unsplash from "./Unsplash";
import CurrencyExchangeApp from "./CurrencyExchangeApp ";

const Extra = () => {
  return (
    <div className="container gap-5 hakkimizda bg-[url('https://akarebilisim.com.tr/images/bg.png')]  mx-auto flex justify-between divCenter py-5 justify-center">
      <CurrencyExchangeApp />
      <WeatherApp />
      <Unsplash />
    </div>
  );
};

export default Extra;
