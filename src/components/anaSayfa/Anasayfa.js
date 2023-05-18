import React from "react";
import Sirketler from "./Sirketler";
import Hakkimizda from "./Hakkimizda";

const Anasayfa = ({ sirketler }) => {
  return (
    <div className="mt-0.5">
      <div className="bg-slate-200 menu-background bg-cover flex border-b-2 border-slate-300 photoDiv">
        <div className="flex items-center justify-end ">
          <img
            src="https://akarebilisim.com.tr/images/cloud-servers.gif"
            className="min-h-[50px] h-[80%] "
          ></img>
        </div>
        <div className="pr-32 flex items-center justify-center">
          <img
            className="min-h-[50px]"
            src="https://akarebilisim.com.tr/images/projeler.gif"
            alt=""
          />
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
