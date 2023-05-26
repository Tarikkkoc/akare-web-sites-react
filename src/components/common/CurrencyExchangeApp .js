import React, { useEffect, useState } from "react";
const api = {
  key: "17c5b153f2aa4e8f38ebf38278d4588f",
};
const CurrencyRates = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "http://data.fixer.io/api/latest?access_key=17c5b153f2aa4e8f38ebf38278d4588f"
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }, []);

  return (
    <div className="flex flex-col gap-2 justfy-center w-[30%] min-w-[30%] items-center">
      <h1 className="colorOrange text-3xl text-center">Currency Rates</h1>
      <div>
        <span>
          <strong>EUR/TRY: </strong>
        </span>
        {data.rates.TRY}
      </div>
      <div>
        <span>
          <strong>USD/TRY: </strong>
        </span>
        {data.rates.TRY / data.rates.USD}
      </div>
      <div>
        <span>
          <strong>GBP/TRY: </strong>
        </span>
        {data.rates.TRY / data.rates.GBP}
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
