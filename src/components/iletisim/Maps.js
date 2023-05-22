import React from "react";

const Maps = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  return (
    <div className="grid place-items-center mb-5">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/place/aKare+Bilişim+Hizmetleri+Tic.+A.Ş./@40.9955705,28.7178645,17z/data=!3m1!4b1!4m6!3m5!1s0x14caa103cacc323f:0xf17eff41e2c3b2c1!8m2!3d40.9955666!4d28.7227354!16s%2Fg%2F12qfhx3lt&key=${AIzaSyChXyt_sGb33lX616iEA_m6F_vvoYeSAzA}" // Google Maps'e ait iframe kodu
        className="w-[65%] min-w-[65%] overflow-hidden"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Maps;
