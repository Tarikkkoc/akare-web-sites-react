import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navi = () => {
  const [open, setOpen] = useState(false);
  const container = useRef(null);

  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const handleButtonClick = () => {
    setOpen((open) => !open);
  };

  const a = () => {
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="shadow-lg z-10 bg-slate-100 border-t-2 border-red-500 sticky top-0">
      <div className="flex header-nav p items-center container mx-auto">
        <div className="flex justify-center min-w-[45%] w-[50%] ">
          <Link to="/">
            <img
              className="align-middle w-[100%] min-w-[100%] min-h-[60px] h-10  "
              src="https://akarebilisim.com.tr/images/logoNew3.png"
              alt=""
            />
          </Link>
        </div>
        <ul className="flex w-[60%] font-dosis font-medium text-sm menu-item mb-3 px-1 nav mr-3 justify-start text-gray-500 shrink-1">
          <Link to="/">
            <li className="hover:text-white p-3.5 font-medium hover:cursor-pointer hover:bg-gray-400 cursor-pointer">
              ANA SAYFA
            </li>
          </Link>
          <Link to="/projelerimiz">
            <li className="hover:text-white p-3.5 font-medium hover:cursor-pointer  hover:bg-gray-400 cursor-pointer">
              PROJELERIMIZ
            </li>
          </Link>
          <Link to="/hizmetlerimiz">
            <li className=" hover:text-white p-3.5 hover:cursor-pointer grid place-items-center hover:bg-gray-400 cursor-pointer">
              HIZMETLERIMIZ
            </li>{" "}
          </Link>
          <Link to="kurumsal">
            <li className=" hover:text-white p-3.5 hover:cursor-pointer grid place-items-center hover:bg-gray-400 cursor-pointer">
              KURUMSAL
            </li>{" "}
          </Link>
          <Link to="/iletisim">
            <li className="hover:text-white p-3.5 hover:cursor-pointer grid place-items-center hover:bg-gray-400 cursor-pointer">
              ILETISIM
            </li>
          </Link>
        </ul>

        <div className="toggle justify-end hidden " ref={container}>
          <button
            type="button"
            className="button text-2xl pr-3"
            onClick={handleButtonClick}
          >
            ☰
          </button>
          {open && (
            <div className="dropdown bg-slate-100">
              <ul className="colorNavi text-sm leading-5 py-2.5 px-3">
                <Link to="/" onClick={handleButtonClick}>
                  <li className="py-2.5">ANA SAYFA</li>
                </Link>
                <Link to="/projelerimiz" onClick={handleButtonClick}>
                  <li className="py-2.5">PROJELERİMİZ</li>
                </Link>
                <Link to="/hizmetlerimiz" onClick={handleButtonClick}>
                  <li className="py-2.5">HİZMETLERİMİZ</li>
                </Link>
                <Link to="/kurumsal" onClick={handleButtonClick}>
                  <li className="py-2.5">KURUMSAL</li>
                </Link>
                <Link to="/iletisim" onClick={handleButtonClick}>
                  <li className="py-2.5">İLETİŞİM</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navi;
