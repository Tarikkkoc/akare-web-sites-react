import React from "react";

const PhotoDiv = ({ title, title1, img }) => {
  return (
    <div className=" bg-slate-200  colorPhoto flex justify-center bg-[url('https://akarebilisim.com.tr/images/orta.jpg')] menu bg-cover  ">
      <div className="container mx-auto mt-0.5 photoDiv px-6 justify-center flex">
        <div className="w-[35%] photoTitle flex justify-center pt-10 text-4xl font-normal  ">
          <span className="colorOrange">{title}</span>{" "}
          <span className="colorBlue">{title1}</span>
        </div>
        <div className="w-[65%] flex photoImg my-8 photoDiv items-center ">
          <img
            className="min-h-[75%] h-[75%] min-w-[300px] w-[75%]"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDiv;
