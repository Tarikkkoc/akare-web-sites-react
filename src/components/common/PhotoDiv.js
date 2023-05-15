import React from "react";

const PhotoDiv = ({ title, img }) => {
  return (
    <div className="bg-slate-200 flex border-b-2 border-slate-300 photoDiv">
      <div className="w-1/4 pt-10 text-2xl font-normal text-orange-500 text-right">
        {title}
      </div>
      <div className="w-9/12 pr-32">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default PhotoDiv;
