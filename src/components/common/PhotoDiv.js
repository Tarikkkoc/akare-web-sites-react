import React from "react";

const PhotoDiv = ({ title, img }) => {
  return (
    <div className=" bg-slate-200 flex justify-center menu-background bg-cover border-b-2 border-slate-300 ">
      <div className="container mx-auto mt-0.5 photoDiv px-6 justify-center flex">
        <div className="w-1/4 pt-10  text-4xl font-normal text-orange-500 ">
          {title}
        </div>
        <div className="w-1/2 flex justify-center items-center ">
          <img
            className="min-h-[50px] min-w-[200px] w-[600px]"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDiv;
