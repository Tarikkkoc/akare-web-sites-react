import React, { useEffect, useState } from "react";

const CurrencyExchangeApp = () => {
  const [news, setNews] = useState({});
  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2023-05-25&" +
    "sortBy=popularity&" +
    "apiKey=b221790820f2458ab0a9bd4f05f2a63a";

  const getCurrency = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setNews(result);
      });
  };
  return (
    <div className="flex flex-col gap-2 hakkimizdaDesign justify-cnter items-center">
      <h1 className="colorOrange text-3xl">Piyasa</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <button
          className="borderSubmit hover:bg-sky-200 p-0.5 rounded-md text cursor-pointer"
          onClick={getCurrency}
        >
          Güncel kurları gör.
        </button>
      </div>
      <div>{}</div>
    </div>
  );
};

export default CurrencyExchangeApp;
