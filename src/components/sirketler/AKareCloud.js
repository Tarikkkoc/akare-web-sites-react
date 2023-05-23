import React, { useEffect } from "react";
import PhotoDiv from "../common/PhotoDiv";
import CloudBody from "./CloudBody";

const AKareCloud = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PhotoDiv
        title="AKARE"
        title1="CLOUD"
        img="https://akarebilisim.com.tr/images/cloud.gif"
      />
      <CloudBody />
    </div>
  );
};

export default AKareCloud;
