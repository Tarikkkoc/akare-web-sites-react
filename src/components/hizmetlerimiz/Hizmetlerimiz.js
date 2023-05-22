import React, { useEffect } from "react";
import Body from "./Body";
import PhotoDiv from "../common/PhotoDiv";

const Hizmetlerimiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PhotoDiv
        title="HİZMETLERİMİZ"
        img="https://akarebilisim.com.tr/images/hizmetlerimiz.gif"
      />
      <Body />
    </div>
  );
};

export default Hizmetlerimiz;
