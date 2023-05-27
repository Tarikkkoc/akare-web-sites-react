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

  return (
    <div className="flex flex-col gap-2 justfy-center w-[30%] min-w-[30%] items-center">
      <h1 className="colorOrange text-3xl text-center">Currency Rates</h1>
      <div className="flex flex-col">
        <div class="container mx-auto">
          <table class="border border-gray-300">
            <thead>
              <tr>
                <th class="border-b border-gray-300 px-4 py-2">
                  Currency Rate
                </th>
                <th class="border-b border-gray-300 px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b border-gray-300 font-bold px-4 py-2">
                  EUR/TRY:
                </td>
                <td class="border-b border-gray-300 px-4 py-2">{TRY / EUR}</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 font-bold px-4 py-2">
                  USD/TRY:
                </td>
                <td class="border-b border-gray-300 px-4 py-2">{TRY / USD}</td>
              </tr>
              <tr>
                <td class="border-b border-gray-300 font-bold px-4 py-2">
                  GBP/TRY:
                </td>
                <td class="border-b border-gray-300 px-4 py-2">{TRY / GBP}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRates;

// import React, { useEffect, useState } from "react";

// const CurrencyExchangeApp = () => {
//   const [news, setNews] = useState({});
//   const url =
//     "https://newsapi.org/v2/everything?" +
//     "q=Apple&" +
//     "from=2023-05-25&" +
//     "sortBy=popularity&" +
//     "apiKey=b221790820f2458ab0a9bd4f05f2a63a";

//   const getCurrency = () => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         setNews(result);
//       });
//   };
//   return (
//     <div className="flex w-[30%] min-w-[30%] text-center flex-col gap-2 justify-cnter items-center">
//       <h1 className="colorOrange text-3xl">News</h1>
//       <div className="flex flex-col justify-center items-center gap-2">
//         <button
//           className="borderSubmit hover:bg-sky-200 p-0.5 rounded-md text cursor-pointer"
//           onClick={getCurrency}
//         >
//           For news
//         </button>
//       </div>

//       <div className="flex flex-col gap-2">
//         {news.articles && news.articles.length > 0
//           ? news.articles.map((a) => (
//               <div>
//                 <div>
//                   <h1>{a.title}</h1>
//                   <p>{a.description}</p>
//                   <p>{a.content}</p>
//                   <p>written by {a.author}</p>
//                 </div>
//               </div>
//             ))
//           : ""}
//       </div>
//     </div>
//   );
// };

// export default CurrencyExchangeApp;
