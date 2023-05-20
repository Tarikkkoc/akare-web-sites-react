import React from "react";

const PhotoDiv = ({ title, img }) => {
  return (
    <div className="mt-0.5 bg-slate-200 menu-background bg-cover flex border-b-2 border-slate-300 photoDiv">
      <div className="w-1/4 pt-10 text-4xl font-normal text-orange-500 text-right">
        {title}
      </div>
      <div className="w-9/12 flex justify-center items-center ">
        <img
          className="min-h-[50px] min-w-[200px] w-[600px]"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
};

export default PhotoDiv;
