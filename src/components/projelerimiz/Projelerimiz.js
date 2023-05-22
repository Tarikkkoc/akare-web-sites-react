import React, { useEffect } from "react";
import Body from "./Body";
import PhotoDiv from "../common/PhotoDiv";

const Projelerimiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PhotoDiv
        title="PROJELERIMIZ"
        img="https://akarebilisim.com.tr/images/projeler.gif"
      />
      <Body />
    </div>
  );
};

export default Projelerimiz;
