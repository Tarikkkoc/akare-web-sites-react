import React, { useEffect } from "react";
import PhotoDiv from "../common/PhotoDiv";
import IsgBody from "./IsgBody";

const AKareIsg = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PhotoDiv
        title="AKAREISG"
        img="https://akarebilisim.com.tr/images/isg.gif"
      />
      <IsgBody />
    </div>
  );
};

export default AKareIsg;
