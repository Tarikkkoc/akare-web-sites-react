import React, { useEffect } from "react";
import PhotoDiv from "../common/PhotoDiv";
import EduBody from "./EduBody";

const AKareEdu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PhotoDiv
        title="AKARE"
        title1="EDU"
        img="https://akarebilisim.com.tr/images/edu.gif"
      />
      <EduBody />
    </div>
  );
};

export default AKareEdu;
