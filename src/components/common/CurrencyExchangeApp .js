import React, { useEffect, useState } from "react";

const api = {
  key: "17c5b153f2aa4e8f38ebf38278d4588f",
};

const CurrencyRates = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/80b7971524669bfdaceb2ea8/latest/USD"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
        console.log(data);
      });
  }, []);

  if (Object.keys(data).length === 0 || !data.conversion_rates) {
    return (
      <div>
        This request has been blocked; the content must be served over HTTPS.
      </div>
    );
  }

  const TRY = data.conversion_rates.TRY;
  const USD = data.conversion_rates.USD;
  const GBP = data.conversion_rates.GBP;
  const EUR = data.conversion_rates.EUR;

  function formatNumber(number) {
    return number.toLocaleString(undefined, {
      maximumFractionDigits: 4,
      minimumFractionDigits: 4,
    });
  }

  return (
    <div className="flex flex-col gap-2 justfy-center w-[30%] min-w-[30%] items-center">
      <h1 className="colorOrange text-3xl text-center">Currency Rates</h1>
      <div className="flex flex-col">
        <div className="container mx-auto">
          <table className="border border-gray-300">
            <thead>
              <tr>
                <th className="border-b border-gray-300 px-4 py-2">
                  Currency Rate
                </th>
                <th className="border-b border-gray-300 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 font-bold px-4 py-2">
                  EUR/TRY:
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {formatNumber(TRY / EUR)}
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 font-bold px-4 py-2">
                  USD/TRY:
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {formatNumber(TRY / USD)}
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 font-bold px-4 py-2">
                  GBP/TRY:
                </td>
                <td className="border-b border-gray-300 px-4 py-2">
                  {formatNumber(TRY / GBP)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRates;
