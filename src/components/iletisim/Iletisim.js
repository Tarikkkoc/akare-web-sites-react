import React, { useEffect } from "react";
import Body from "./Body";
import PhotoDiv from "../common/PhotoDiv";
// import Maps from "./Maps";

const Iletisim = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PhotoDiv
        title="İLETİŞİM"
        img="https://akarebilisim.com.tr/images/iletisim.gif
        "
      />
      <Body />
      {/* <Maps /> */}
    </div>
  );
};

export default Iletisim;
