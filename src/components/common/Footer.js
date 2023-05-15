import React from "react";

import { Link } from "react-router-dom";

const Footer = ({ sirketler }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-gray-900 pt-5 pb-5">
      <div className="w-full flex justify-center pt-2">
        <div onClick={handleScrollTop}>
          <img
            className="w-8 h-8 cursor-pointer "
            src="https://www.svgrepo.com/show/355496/arrow-angle-up-circle.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 pl-10 pr-10 pt-10 flex items-center justify-center footer">
        <div className=" gap-2 flex-col w-4/12 text-gray-600" id="adres">
          <p className="w-full">
            İstanbul Üniversitesi Avcılar Kampüsü, TEKNOKENT Z-15 Avcılar /
            İstanbul
          </p>
          <p>(212) 210 63 13</p>
          <div className="flex pt-2.5">
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
          className="w-4/12 flex flex-col justify-center items-center gap-5 text-blue-500 text-lg font-light"
          id="sirketler"
        >
          {sirketler.map((sirket) => (
            <Link to={`/${sirket.link}`}>
              <span className="text-center cursor-pointer">{sirket.title}</span>
            </Link>
          ))}
        </div>
        <div
          className="w-4/12 grid place-items-end pb-5 text-gray-600"
          id="info"
        >
          <p>2017 © aKare Bilişim Hizmetleri</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
