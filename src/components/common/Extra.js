import React from "react";
import { Link } from "react-router-dom";
import WeatherApp from "./WeatherApp";
import Unsplash from "./Unsplash";
import CurrencyExchangeApp from "./CurrencyExchangeApp ";

const Extra = () => {
  return (
    <div className="container hakkimizda bg-[url('https://akarebilisim.com.tr/images/bg.png')]  mx-auto flex justify-around py-5 justify-center">
      <WeatherApp />
      <Unsplash />
      <CurrencyExchangeApp />
    </div>
  );
};

export default Extra;
