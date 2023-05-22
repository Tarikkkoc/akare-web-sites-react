import React from "react";
import { Link } from "react-router-dom";

const Sirketler = ({ sirketler }) => {
  return (
    <div className="mt-3">
      <div className="container sirketler flex justify-center justify-around px-12 mx-auto">
        {sirketler.map((sirket) => (
          <div className="w-32 flex">
            <Link to={`/${sirket.link}`}>
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  className="w-20 min-w-[80px] min-h-[96]"
                  src={sirket.img}
                  alt=""
                />
                <div className="flex">
                  <span className="text-orange-500 text-3xl">
                    {sirket.name}
                  </span>
                  <span className="text-blue-500 text-3xl">{sirket.statu}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sirketler;
