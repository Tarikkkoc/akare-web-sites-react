import React from "react";
import { Link } from "react-router-dom";

const Sirketler = ({ sirketler }) => {
  return (
    <div className="flex sirketler justify-around px-32 mt-3">
      {sirketler.map((sirket) => (
        <div className="w-32 flex justify-around">
          <Link to={`/${sirket.link}`}>
            <div className="flex flex-col gap-2 items-center justify-center">
              <img
                className="w-20 min-w-[80px] min-h-[96]"
                src={sirket.img}
                alt=""
              />
              <div className="flex">
                <span className="text-orange-500 text-2xl">{sirket.name}</span>
                <span className="text-blue-500 text-2xl">{sirket.statu}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sirketler;
