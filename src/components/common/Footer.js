import React from "react";

import { Link } from "react-router-dom";

const Footer = ({ sirketler }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-neutral-800 pt-12 pb-5">
      <div className="w-full flex justify-center pt-2">
        <div onClick={handleScrollTop}>
          <img
            className="w-8 h-8 cursor-pointer "
            src="https://www.svgrepo.com/show/355496/arrow-angle-up-circle.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-around gap-5 px-28 pb-8 mt-5 footer">
        <div
          className=" gap-2 text flex flex-col justify-center w-[30%] text-gray-500"
          id="adres"
        >
          <p className="w-full">
            İstanbul Üniversitesi Avcılar Kampüsü, TEKNOKENT Z-15 Avcılar /
            İstanbul
          </p>
          <p>(212) 210 63 13</p>
          <div className="flex gap-2 pt-2.5">
            <a href="https://www.youtube.com/channel/UCzTvHr5-gYWVWn_WHSRgaIg">
              <img
                src="https://akarebilisim.com.tr/images/youtube.jpg"
                alt="YouTube"
              />
            </a>
            <a href="https://www.linkedin.com/company-beta/17986729/">
              <img
                src="https://akarebilisim.com.tr/images/in.jpg"
                alt="Linkedin"
              />
            </a>
          </div>
        </div>
        <div
          className="w-[40%] flex flex-col items-center gap-1 text-blue-500 text-base font-light"
          id="sirketler"
        >
          {sirketler.map((sirket) => (
            <Link to={`/${sirket.link}`}>
              <span className="text-center cursor-pointer">{sirket.nick}</span>
            </Link>
          ))}
        </div>
        <div
          className="w-[30%] grid flex items-end justify-center text pb-5  text-gray-500"
          id="info"
        >
          <p>2017 © aKare Bilişim Hizmetleri</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
