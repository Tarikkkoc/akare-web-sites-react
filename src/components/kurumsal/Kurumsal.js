import React, { useEffect } from "react";
import Body from "./Body";
import PhotoDiv from "../common/PhotoDiv";

const Kurumsal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PhotoDiv
        title="KURUMSAL"
        img="https://akarebilisim.com.tr/images/kurumsal.gif"
      />
      <Body />
    </div>
  );
};

export default Kurumsal;
