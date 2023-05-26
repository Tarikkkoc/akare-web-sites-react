import React, { useEffect, useState } from "react";
import Sirketler from "./Sirketler";
import Hakkimizda from "./Hakkimizda";
import WeatherApp from "../common/WeatherApp";
import CurrencyExchangeApp from "../common/CurrencyExchangeApp ";

const Anasayfa = ({ sirketler }) => {
  const [matrixRows, setMatrixRows] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const matrixCode1 = "REACTISAWESOME";
    const matrixCode2 = "MICROSOFTDEVPOWER";
    const matrixCode3 = "GOOGLECODEMASTERS";

    const animationInterval = setInterval(() => {
      setMatrixRows([
        matrixCode1
          .split("")
          .map((char, index) => <span key={index}>{char}</span>),
        matrixCode2
          .split("")
          .map((char, index) => <span key={index}>{char}</span>),
        matrixCode3
          .split("")
          .map((char, index) => <span key={index}>{char}</span>),
      ]);
    });

    return () => clearInterval(animationInterval);
  }, []);
  return (
    <div className="mt-0.5">
      <div className=" bg-[url('https://akarebilisim.com.tr/images/orta.jpg')] bg-cover border-b-2 border-slate-300 ">
        <div className="flex container mx-auto justify-center photoDiv">
          <div className="flex h-1/2 py-6 photoDivImg items-center justify-center">
            <img
              src="https://akarebilisim.com.tr/images/cloud-servers.gif"
              className="min-h-[80%] h-[50%] "
            ></img>
          </div>
          <div className="w-1/2 flex items-center justify-center textAnimation">
            <div className="matrix-container flex justify-center items-center animation  rounded-[5%] flex-col border-2 border-slate-200 min-w-[61%] p-4 w-[50%] h-[60%] min-h-[50%]">
              {matrixRows.map((row, index) => (
                <div key={index} className="matrix-row">
                  {row}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Sirketler sirketler={sirketler} />
      <Hakkimizda
        onceGuvenlikImg="https://akarebilisim.com.tr/images/privacy.png"
        onceGuvenlikTitle="Önce Güvenlik"
        akilliCozumlerImg="https://akarebilisim.com.tr/images/rating_system.png"
        akilliCozumlerTitle="Akıllı Çözümler"
      />
    </div>
  );
};

export default Anasayfa;
