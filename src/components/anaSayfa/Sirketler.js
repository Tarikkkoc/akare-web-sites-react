import React from "react";
import { Link } from "react-router-dom";

const Sirketler = ({ sirketler }) => {
  return (
    <div className="flex sirketler justify-around pl-32 pr-32 pt-10">
      {sirketler.map((sirket) => (
        <div className="w-32">
          <Link to={`/${sirket.link}`}>
            <img className="w-24" src={sirket.img} alt="" />
            <span className="pl-2 text-orange-500">{sirket.name}</span>
            <span className="text-blue-500">{sirket.statu}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sirketler;
