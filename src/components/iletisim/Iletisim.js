import React from "react";
import Body from "./Body";
import PhotoDiv from "../common/PhotoDiv";
import GoogleMaps from "./GoogleMaps";

const Iletisim = () => {
  return (
    <div>
      <PhotoDiv
        title="İLETİŞİM"
        img="https://akarebilisim.com.tr/images/iletisim.gif
        "
      />
      <Body />
      <GoogleMaps />
    </div>
  );
};

export default Iletisim;
