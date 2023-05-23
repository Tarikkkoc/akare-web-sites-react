import React from "react";
import { Link } from "react-router-dom";

const Sirketler = ({ sirketler }) => {
  return (
    <div className="mt-3 bg-[url('https://akarebilisim.com.tr/images/bg.png')]">
      <div className="container sirketler flex gap-8 justify-center justify-around px-36 mx-auto">
        {sirketler.map((sirket) => (
          <div className="flex">
            <Link to={`/${sirket.link}`}>
              <div className="flex flex-col gap-2 items-center justify-center">
                <img
                  className="w-20 min-w-[80px] min-h-[96]"
                  src={sirket.img}
                  alt=""
                />
                <div className="flex">
                  <span className="colorOrange text-3xl">{sirket.name}</span>
                  <span className="colorBlue text-3xl">{sirket.statu}</span>
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
