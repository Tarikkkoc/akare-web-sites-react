import React from "react";
import Sirketler from "./Sirketler";
import Hakkimizda from "./Hakkimizda";

const Anasayfa = ({ sirketler }) => {
  return (
    <div>
      <div className="bg-slate-200 flex border-b-2 border-slate-300 photoDiv">
        <div className="w-1/2 grid place-items-center ">
          <img
            src="https://akarebilisim.com.tr/images/cloud-servers.gif"
            className="pt-10 "
          ></img>
        </div>
        <div className="w-1/2 pr-32 grid place-items-center ">
          <img src="https://akarebilisim.com.tr/images/projeler.gif" alt="" />
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
