import React from "react";
import Map from "../../img/maps1.png";
const Maps = () => {
  return (
    <div className="w-[100%] flex justify-center py-5">
      <div className="w-[60%] border-2 p-0.5 bg-slate-100">
        <a
          target="_blank"
          href="https://www.google.com/maps/place/aKare+Bilişim+Hizmetleri+Tic.+A.Ş./@40.9809567,28.7377962,12.78z/data=!4m6!3m5!1s0x14caa103cacc323f:0xf17eff41e2c3b2c1!8m2!3d40.9955666!4d28.7227354!16s%2Fg%2F12qfhx3lt"
        >
          <img
            className="w-[100%] min-w-[100%] h-[300px] hover:scale-110 transition-transform duration-300"
            src={Map}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Maps;
